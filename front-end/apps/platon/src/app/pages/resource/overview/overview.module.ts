import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Libs
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { PieChartModule } from '@swimlane/ngx-charts';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiListModule } from '@platon/shared/ui/list';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

// Module
import { OverviewComponent } from './overview.component';


@NgModule({
    imports: [
        CommonModule,

        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSelectModule,
        MatTooltipModule,
        MatExpansionModule,

        NzTagModule,
        NzGridModule,
        NzIconModule,
        NzEmptyModule,
        NzDividerModule,
        NzSkeletonModule,
        NzStatisticModule,
        NzNotificationModule,

        PieChartModule,

        CoreAuthModule,
        SharedUiListModule,
        FeatureWorkspaceModule,

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
