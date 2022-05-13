import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentDocs } from '@platon/feature/web-component';
import { NgeDocSettings } from '@mcisse/nge/doc';
import { DocComponent } from './doc.component';

const DeveloperDocs = {
    meta: {
        name: 'PLaTon pour les développeurs',
        root: '/doc/developers/',
        logo: 'assets/images/logo/platon.svg',
        url: 'https://premierlangage.github.io/platon-front/',
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
        loadChildren: () => import('@mcisse/nge/doc').then(m => m.NgeDocModule),
        data: [
            DeveloperDocs,
            WebComponentDocs,
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
