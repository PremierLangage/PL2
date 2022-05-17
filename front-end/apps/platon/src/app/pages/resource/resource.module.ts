
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';


import { ResourceComponent } from './resource.component';
import { ResourceRoutingModule } from './resource-routing.module';

@NgModule({
    declarations: [ResourceComponent],
    imports: [
        CommonModule,
        FormsModule,

        MatIconModule,
        MatMenuModule,
        MatTooltipModule,


        NzIconModule,
        NzButtonModule,
        NzSelectModule,
        NzMessageModule,
        NzBreadCrumbModule,

        SafePipeModule,
        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        ResourceRoutingModule,
    ],
})
export class ResourceModule {}
