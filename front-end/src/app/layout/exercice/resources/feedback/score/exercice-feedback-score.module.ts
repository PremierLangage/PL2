import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result'; 

import { FeedBackScoreSuperClass } from './feedback-score-superclass';
import { FeedbackScoreProviderComponent } from './feedback-score-provider/feedback-score-provider.component';
import { DefaultComponent } from './components/default/default.component';
import { DefaultResultComponent } from './components/default-result/default-result.component';



@NgModule({
  imports: [
    CommonModule,
    
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzSpaceModule,
    NzProgressModule,
    NzResultModule,
  ],
  declarations: [
    // PROVIDER
    FeedbackScoreProviderComponent,
    // SUPERCLASS
    FeedBackScoreSuperClass,
    // TITLES COMPONENTS :
    DefaultComponent,
    DefaultResultComponent,
  ],
  exports: [
    FeedbackScoreProviderComponent
  ]
})
export class ExerciceFeedbackScoreModule { }
