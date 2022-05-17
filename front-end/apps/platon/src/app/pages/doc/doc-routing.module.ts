import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgeDocSettings } from '@cisstech/nge/doc';
import { createWebComponentDoc } from '@platon/feature/web-component';

import { DocComponent } from './doc.component';

const DeveloperDocs = {
    meta: {
        name: 'PLaTon pour les développeurs',
        root: '/doc/developers/',
        logo: 'assets/images/logo/platon.svg',
        backUrl: '/doc',
        repo: {
            name: 'platon-front',
            url: 'https://github.com/PremierLangage/platon-front'
        },
    },
    pages: [
        { title: 'Présentation', href: 'presentation', renderer: 'assets/docs/developers/index.md' }
    ],
} as NgeDocSettings;


const routes: Routes = [
    { path: '', component: DocComponent },
    {
        path: '**',
        loadChildren: () => import('@cisstech/nge/doc').then(m => m.NgeDocModule),
        data: [
            DeveloperDocs,
            createWebComponentDoc({
                root: '/doc/components/',
                backUrl: '/doc',
            }),
        ],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DocRoutingModule { }
