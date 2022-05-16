import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { Error403Component } from './error-403.component';
import { Error404Component } from './error-404.component';
import { Error500Component } from './error-500.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,

        NzResultModule,
        NzSkeletonModule,

        RouterModule.forChild([
            { path: '403', component: Error403Component },
            { path: '404', component: Error404Component },
            { path: '500', component: Error500Component },
        ])
    ],
    exports: [
        Error403Component,
        Error404Component,
        Error500Component,
    ],
    declarations: [
        Error403Component,
        Error404Component,
        Error500Component,
    ],
})
export class AppSharedErrorModule { }
