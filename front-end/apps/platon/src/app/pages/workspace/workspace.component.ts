import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { LayoutTab } from '../../shared/layout';


@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceComponent {
    readonly tabs: LayoutTab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },

        {
            id: 'tab-circles',
            title: 'Cercles',
            link: ['circles']
        },
        {
            id: 'tab-resources',
            title: 'Ressources',
            link: ['resources']
        },
    ];

    readonly actions: MenuAction[] = [];

    constructor(private readonly authService: AuthService) { }

    async ngOnInit() {
        const user = (await this.authService.ready())!;

        if (user.isAdmin) {
            this.actions.push({
                id: 'menu-create-circle',
                title: 'Créer un cercle',
                icon: 'group_work',
                link: ['/create-circle']
            });
        }

        this.actions.push(
            {
                id: 'menu-create-model',
                title: 'Créer une ressource',
                icon: 'widgets',
                link: ['/create-resource']
            },
        );
    }
}


interface MenuAction {
    id: string;
    icon: string;
    title: string;
    link: string | any[];
}
