import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, CircleService, FileService, FileTree, Resource, ResourceService, UpdateResourceForm } from '@platon/feature/workspace';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from 'rxjs';

@Injectable()
export class ResourcePresenter implements OnDestroy {
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
        private readonly resourceService: ResourceService,
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
        const { resource } = this.context.value;
        if (resource) {
            return this.fileService.tree(resource)
        }
        throw new ReferenceError('missing resource');
    }

    async openInVsCodeUrl(): Promise<string> {
        const authToken = (await this.authService.token())!;
        const rid = this.context.value.resource?.id;
        const { access, refresh } = authToken;
        const origin = location.origin;
        return `vscode://PLaTon.platon-editor?origin=${origin}&resource=${rid}&access=${access}&refresh=${refresh}`;
    }

    async update(form: Omit<UpdateResourceForm, 'resource'>): Promise<boolean> {
        const { resource } = this.context.value as Required<Context>;;
        try {
            const newResource = await this.resourceService.updateResource({
                resource,
                ...form
            }).toPromise();

            this.context.next({
                ...this.context.value,
                resource: newResource,
            });

            this.messageService.success('Les informations de la ressource ont bien été modifiées !');
            return true;
        } catch {
            this.alertError();
            return false;
        }
    }


    private async refresh(resourceId: number): Promise<void> {
        const [user, resource] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.resourceService.findById(resourceId))
        ]);

        const circle = await lastValueFrom(this.circleService.findById(resource.circle.id));
        this.context.next({
            state: 'READY',
            user,
            circle,
            resource,
        });
    }

    private async onChangeRoute(circleId: number): Promise<void> {
        try {
            this.refresh(circleId);
        } catch (error) {
            const status = (error as any).status || 500;
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
    resource?: Resource;
}
