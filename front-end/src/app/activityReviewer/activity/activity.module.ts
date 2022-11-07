import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { ActivityReviewerComponent } from './activity.component';

import { FormsModule } from '@angular/forms';
import { CorrectionGridElementComponent } from './correctionGridElement/correctionGridElement.component';
import { CorrectionGridComponent } from './correctionGrid/correctionGrid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    NzSliderModule,
    NzGridModule,
    NzInputModule,
    NzInputNumberModule,
    NzDividerModule
  ],
  declarations: [
    ActivityReviewerComponent,
    CorrectionGridElementComponent,
    CorrectionGridComponent
  ],
  exports : [
    ActivityReviewerComponent
  ]
})
export class ActivityReviewerModule { }
