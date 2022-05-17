import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentDocs } from './exercise';
import { ExerciseComponent } from './exercise.component';

const routes: Routes = [
    { path: 'exo/', component: ExerciseComponent },
    {
        path: '**',
        loadChildren: () => import('@mcisse/nge/doc').then(m => m.NgeDocModule),
        data: [
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
export class ExerciseRoutingModule { }
