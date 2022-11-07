import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityReviewerModule } from './activity/activity.module';
import { ActivityReviewerComponent } from './activity/activity.component';



@NgModule({
    imports: [
        CommonModule,
        ActivityReviewerModule
    ],
    exports: [
        ActivityReviewerModule
    ],
})
export class ActivityReviewerSharedLayoutModule {}