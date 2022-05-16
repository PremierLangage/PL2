import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateCircleComponent } from './create-circle.component';

const routes: Routes = [
    { path: '', component: CreateCircleComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateCircleRoutingModule {}
