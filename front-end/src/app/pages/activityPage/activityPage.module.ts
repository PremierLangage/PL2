import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityPageComponent } from './activityPage.component';
import { ActivityModule } from 'src/app/activityPlayer/activity/activity.module';
import { ActivityPageRoutingModule } from './activityPage-routing.module';
import { ActivityReviewerModule } from 'src/app/activityReviewer/activity/activity.module';
import { ExercisePlayerModule } from 'projects/exercise-player/src/public-api';

@NgModule({
  imports: [
    CommonModule,
    ActivityPageRoutingModule, 
    ActivityModule,
    ActivityReviewerModule,
    ExercisePlayerModule
  ],
  declarations: [ActivityPageComponent]
})
export class ActivityPageModule { }
