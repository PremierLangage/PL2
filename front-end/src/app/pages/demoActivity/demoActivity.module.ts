import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoActivityComponent } from './demoActivity.component';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ExercisePlayerModule } from 'projects/exercise-player/src/public-api';

const routes: Routes = [
  { path: ':id', component: DemoActivityComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTagModule,
    NzSkeletonModule,
    NzDividerModule,
    ExercisePlayerModule 
  ],
  declarations: [DemoActivityComponent],
})
export class DemoActivityModule { }
