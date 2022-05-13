import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourceComponent } from './resource.component';

const routes: Routes = [
    {
        path: ':id',
        component: ResourceComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import(
                    /* webpackChunkName: "resource-overview" */
                    './overview/overview.module'
                ).then(m => m.OverviewModule)
            },
            {
                path: 'informations',
                loadChildren: () => import(
                    /* webpackChunkName: "resource-informations" */
                    './informations/informations.module'
                ).then(m => m.InformationsModule)
            },
            {
                path: 'files',
                loadChildren: () => import(
                    /* webpackChunkName: "resource-files" */
                    './files/files.module'
                ).then(m => m.FilesModule)
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class ResourceRoutingModule { }
