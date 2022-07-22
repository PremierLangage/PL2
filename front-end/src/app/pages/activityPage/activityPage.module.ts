import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityPageComponent } from './activityPage.component';
import { ActivityModule } from 'src/app/layout/activity/activity.module';
import { ActivityPageRoutingModule } from './activityPage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityPageRoutingModule, ActivityModule
  ],
  declarations: [ActivityPageComponent]
})
export class ActivityPageModule { }
