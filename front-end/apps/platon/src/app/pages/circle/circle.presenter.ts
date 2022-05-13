import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, CircleEvent, CircleMember, CircleMembersFilters, CircleService, CircleWatcher, CircleInvitation, InvitationForm, UpdateCircleForm, CircleInvitationsFilters, FileTree, FileService } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';

@Injectable()
export class CirclePresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly fileService: FileService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,

    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(Number.parseInt(params.id + '', 10));
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    fileTree(): Observable<FileTree> {
        const { circle } = this.context.value;
        if (circle) {
            return this.fileService.tree(circle)
        }
        throw new ReferenceError('missing circle');
    }

    async openInVsCodeUrl(): Promise<string> {
        const authToken = (await this.authService.token())!;
        const rid = this.context.value.circle?.id;
        const { access, refresh } = authToken;
        const origin = location.origin;
        return `vscode://PLaTon.platon-editor?origin=${origin}&circle=${rid}&access=${access}&refresh=${refresh}`;
    }

    // Watchers

    async watch(): Promise<boolean> {
        const { circle } = this.context.value as Required<Context>;
        try {
            await this.circleService.createWatcher(circle).toPromise();
            await this.refresh(circle.id);
            return true;
        } catch {
            this.alertError();
            return false;
        }
    }

    async unwatch(): Promise<boolean> {
        const { circle, watcher } = this.context.value as Required<Context>;
        try {
            await this.circleService.deleteWatcher(watcher).toPromise();
            await this.refresh(circle.id);
            return true;
        } catch {
            this.alertError();
            return false;
        }
    }

    // Members

    async deleteMember(member: CircleMember): Promise<boolean> {
        const { circle } = this.context.value as Required<Context>;;
        try {
            await this.circleService.deleteMember(member).toPromise();
            await this.refresh(circle.id);
            this.messageService.success(`Membre supprimé !`);
            return true;
        } catch {
            // TODO show more precise error message
            this.alertError();
            return false;
        }
    }

    async listMembers(
        filters: Omit<CircleMembersFilters, 'circle'>
    ): Promise<PageResult<CircleMember>> {
        const { circle } = this.context.value as Required<Context>;
        return this.circleService.listMembers({
            circle,
            ...filters
        }).toPromise();
    }


    // Invitation

    async listInvitations(
        filters: Omit<CircleInvitationsFilters, 'circle'>
    ): Promise<PageResult<CircleInvitation>> {
        const { circle } = this.context.value as Required<Context>;
        return this.circleService.listInvitations({
            circle,
            ...filters
        }).toPromise();
    }

    async acceptInvitation(): Promise<boolean> {
        const { circle, invitation } = this.context.value as Required<Context>;
        try {
            await this.circleService.acceptInvitation(invitation).toPromise();
            await this.refresh(circle.id);
            this.messageService.success( `Invitation acceptée !`);
            return true;
        } catch {
            // TODO show more precise error message
            this.alertError();
            return false;
        }
    }

    async declineInvitation(): Promise<boolean> {
        const { invitation } = this.context.value as Required<Context>;;
        return this.deleteInvitation(invitation);
    }

    async sendInvitation(
        form: Omit<InvitationForm, 'circle'>
    ): Promise<boolean> {
        const messageId = this.messageService.loading(
            "Envoi d'une invitation en cours..", {
            nzDuration: 0
        }).messageId;

        const { circle } = this.context.value as Required<Context>;
        try {
            await this.circleService.createInvitation({ ...form, circle }).toPromise();
            await this.refresh(circle.id);
            this.messageService.success(
                `Invitation envoyée à “${form.invitee}”`
            )
            return true;
        } catch {
            // TODO show more precise error message
            this.alertError();
            return false;
        } finally {
            this.messageService.remove(messageId);
        }
    }

    async deleteInvitation(invitation: CircleInvitation): Promise<boolean> {
        const { circle } = this.context.value as Required<Context>;;
        try {
            await this.circleService.deleteInvitation(invitation).toPromise();
            await this.refresh(circle.id);
            this.messageService.success(`Invitation supprimée !`);
            return true;
        } catch {
            // TODO show more precise error message
            this.alertError();
            return false;
        }
    }

    // Event

    async listEvents(): Promise<PageResult<CircleEvent>> {
        const { circle } = this.context.value as Required<Context>;
        return this.circleService.listEvents(circle).toPromise();
    }


    async update(form: Omit<UpdateCircleForm, 'circle'>): Promise<boolean> {
        const { circle } = this.context.value as Required<Context>;;
        try {
            const newCircle = await this.circleService.updateCircle({
                circle,
                ...form
            }).toPromise();

            this.context.next({
                ...this.context.value,
                circle: newCircle,
            });

            this.messageService.success('Les informations du cercle ont bien été modifiées !');
            return true;
        } catch {
            this.alertError();
            return false;
        }
    }

    private async refresh(circleId: number): Promise<void> {
        const [user, circle] = await Promise.all([
            this.authService.ready(),
            this.circleService.findById(circleId).toPromise()
        ]);

        const [member, watcher, invitation] = await forkJoin([
            this.circleService.findMember(circle!, user!.username),
            this.circleService.findWatcher(circle!, user!.username),
            this.circleService.findInvitation(circle!, user!.username),
        ]).toPromise();

        this.context.next({
            state: 'READY',
            user,
            circle,
            member,
            watcher,
            invitation,
        });
    }

    private async onChangeRoute(circleId: number): Promise<void> {
        try {
            this.refresh(circleId);
        } catch (error) {
            const status = error.status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private alertError(): void {
        this.messageService.error(
            'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !',
        );
    }
}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    circle?: Circle;
    watcher?: CircleWatcher;
    member?: CircleMember;
    invitation?: CircleInvitation;
}
