import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { CoreAuthModule } from '@platon/core/auth';
import { AppSharedErrorModule } from '../error/error.module';

import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ContentComponent } from './content/content.component';
import { ContainerComponent } from './container/container.component';
import { TabsComponent } from './tabs/tabs.component';


const DECLARATIONS = [
    NavComponent,
    LogoComponent,
    HeaderComponent,
    DrawerComponent,
    ContentComponent,
    ContainerComponent,
    TabsComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        LayoutModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,

        NzEmptyModule,
        NzIconModule,
        NzTabsModule,
        NzResultModule,
        NzSkeletonModule,

        CoreAuthModule,
        AppSharedErrorModule,
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class AppSharedLayoutModule { }
