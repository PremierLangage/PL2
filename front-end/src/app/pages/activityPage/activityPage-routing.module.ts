import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityPageComponent } from './activityPage.component';

const routes: Routes = [
  { 
    path: '', 
    component: ActivityPageComponent
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityPageRoutingModule { }
