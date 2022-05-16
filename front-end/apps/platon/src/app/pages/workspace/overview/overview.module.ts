import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

// Module
import { OverviewComponent } from './overview.component';
import { SharedUiListModule } from '@platon/shared/ui/list';


@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatButtonModule,
        MatTooltipModule,

        NzGridModule,
        NzIconModule,
        NzEmptyModule,
        NzDividerModule,
        NzSkeletonModule,
        NzNotificationModule,

        FeatureWorkspaceModule,

        SharedUiListModule,

        RouterModule.forChild([
            {
                path: '',
                component: OverviewComponent
            }
        ])
    ],
    declarations: [OverviewComponent]
})
export class OverviewModule { }
