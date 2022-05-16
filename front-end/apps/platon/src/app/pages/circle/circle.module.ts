
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

// Module
import { CircleComponent } from './circle.component';
import { CircleRoutingModule } from './circle-routing.module';


@NgModule({
    declarations: [
        CircleComponent,
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        NzIconModule,
        NzButtonModule,
        NzMessageModule,
        NzBreadCrumbModule,

        SafePipeModule,
        AppSharedLayoutModule,

        CircleRoutingModule,
    ],
    providers: [],
})
export class CircleModule {}
