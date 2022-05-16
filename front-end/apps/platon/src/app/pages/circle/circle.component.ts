import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { CirclePresenter } from './circle.presenter';
@Component({
    selector: 'app-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CirclePresenter],
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly actions: MenuAction[] = [];
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
            id: 'tab-resources',
            title: 'Ressources',
            link: ['resources']
        },
        {
            id: 'tab-members',
            title: 'Membres',
            link: ['members']
        },
        {
            id: 'tab-informations',
            title: 'Informations',
            link: ['informations']
        },
    ];

    context = this.presenter.defaultContext;
    openInVsCodeUrl = '';

    get parentLink(): any[] {
        return ['/circle', this.context.circle!.parent.id];
    }

    get parentName(): string {
        return this.context.circle!.parent.name;
    }

    get openedIconName(): string {
        return !this.context.circle?.opened
            ? 'lock'
            : 'unlock'
    }

    get openedIconTooltip(): string {
        return !this.context.circle?.opened
            ? 'Vous devez être membre pour publier'
            : 'Vous pouvez publier sans être membre'
    }

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                if (context.circle?.permissions.write) {
                    this.openInVsCodeUrl = await this.presenter.openInVsCodeUrl();
                    this.actions.push(
                        {
                            id: 'menu-create-model',
                            title: 'Créer une ressource',
                            icon: 'widgets',
                            link: ['/create-resource'],
                            queryParams: {
                                'circle': context.circle!.id
                            }
                        },
                    );
                }

                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async acceptInvitation(): Promise<void> {
        await this.presenter.acceptInvitation();
    }

    async declineInvitation(): Promise<void> {
        await this.presenter.declineInvitation();
    }

    async changeWatchingState(): Promise<void> {
        if (this.context.watcher) {
            await this.presenter.unwatch();
        } else {
            await this.presenter.watch();
        }
    }
}


interface MenuAction {
    id: string;
    icon: string;
    title: string;
    link: string | any[];
    queryParams?: Record<string, any>;
}
