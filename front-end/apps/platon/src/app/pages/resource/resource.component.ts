import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { ResourceStatus } from '@platon/feature/workspace';
import { AuthToken } from 'libs/core/auth/src/lib/models/auth-token';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { ResourcePresenter } from './resource-presenter';


@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss'],
    providers: [
        ResourcePresenter,
    ]
})
export class ResourceComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: LayoutTab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },
        {
            id: 'tab-files',
            title: 'Fichiers',
            link: ['files']
        },
        {
            id: 'tab-informations',
            title: 'Informations',
            link: ['informations']
        },
    ];

    readonly status: ResourceStatus[] = [
        'DRAFT',
        'READY',
        'BUGGED',
        'NOT_TESTED',
        'DEPRECATED',
    ];

    context = this.presenter.defaultContext;
    openInVsCodeUrl = '';

    get circleLink(): any[] {
        return ['/circle', this.context.resource!.circle.id];
    }

    get circleName(): string {
        return this.context.resource!.circle.name;
    }

    get canEditOnline(): boolean {
        const { resource } = this.context;
        return resource?.type !== 'MODEL' && !!resource?.permissions?.write;
    }

    get canEditWithVSCode(): boolean {
        const { resource } = this.context;
        return resource?.type === 'MODEL' && resource?.permissions?.write;
    }

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                this.openInVsCodeUrl = await this.presenter.openInVsCodeUrl();
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async updateStatus(status: ResourceStatus) {
        try {
            await this.presenter.update({ status });
        } finally {
            this.changeDetectorRef.markForCheck();
        }
    }

    trackByValue(_: number, item: any) {
        return item;
    }
}
