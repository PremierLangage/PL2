import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { ActivityComponent } from './activity/activity.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
  },
  {
    path: 'course/:id',
    component: CourseComponent,
  },
  {
    path: 'act',
    component: ActivityComponent,
    outlet: 'activity'
  },
  {
    path: 'exo',
    component: ExerciseComponent,
    outlet: 'exercise'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}