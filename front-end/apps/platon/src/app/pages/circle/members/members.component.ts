import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CircleMember, CircleInvitation } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Subscription } from 'rxjs';
import { CirclePresenter } from '../circle.presenter';

@Component({
    selector: 'app-circle-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly form = new FormGroup({
        'status': new FormControl('MEMBER', Validators.required),
        'invitee': new FormControl(undefined, Validators.required),
    });

    context = this.presenter.defaultContext;

    members: PageResult<CircleMember> = { count: 0, results: [] };
    invitations: PageResult<CircleInvitation> = { count: 0, results: [] };

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async sendInvitation(form: any): Promise<void> {
        const { status, invitee } = form;
        await this.presenter.sendInvitation({
            status,
            invitee: invitee.username
        });
    }

    async deleteMember(member: CircleMember): Promise<void> {
        if (await this.presenter.deleteMember(member)) {
            this.members = {
                ...this.members,
                count: this.members.count - 1,
                results: this.members.results.filter(
                    e => e.username !== member.username
                )
            };
            this.changeDetectorRef.markForCheck();
        }
    }

    async loadMembers(params: NzTableQueryParams): Promise<void> {
        this.members = await this.presenter.listMembers({
            offset: (params.pageIndex - 1) * params.pageSize,
            limit: params.pageSize,
        });
        this.changeDetectorRef.markForCheck();
    }

    async deleteInvitation(invitation: CircleInvitation): Promise<void> {
        if (await this.presenter.deleteInvitation(invitation)) {
            this.invitations = {
                ...this.invitations,
                count: this.invitations.count - 1,
                results: this.invitations.results.filter(
                    e => e.invitee !== invitation.invitee
                )
            };
            this.changeDetectorRef.markForCheck();
        }
    }

    async loadInvitations(params: NzTableQueryParams): Promise<void> {
        this.invitations = await this.presenter.listInvitations({
            offset: (params.pageIndex - 1) * params.pageSize,
            limit: params.pageSize,
        });
        this.changeDetectorRef.markForCheck();
    }
}
