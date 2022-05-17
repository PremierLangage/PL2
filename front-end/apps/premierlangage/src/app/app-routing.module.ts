import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { createWebComponentDoc } from '@platon/feature/web-component';

@Component({
    selector: 'app-noop',
    template: ''
})
export class NoOp {}

const routes: Routes = [
    {
        path: 'editor',
        loadChildren: () =>
            import(
                /* webpackChunkName: "editor" */
                './pages/editor/editor.module'
            ).then((m) => m.EditorModule),
    },
    {
        path: 'components',
        loadChildren: () => import('@cisstech/nge/doc').then(m => m.NgeDocModule),
        data: [
            createWebComponentDoc({ root: '/components/', backUrl: '' }),
        ],
    },
    { path: '**', pathMatch: 'full', component: NoOp },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    declarations: [NoOp],
    exports: [RouterModule],
})
export class AppRoutingModule {}
