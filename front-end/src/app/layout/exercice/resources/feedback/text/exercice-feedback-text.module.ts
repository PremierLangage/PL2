import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result'; 

import { FeedbackTextProviderComponent } from './feedback-text-provider/feedback-text-provider.component';
import { FeedBackTextSuperClass } from './feedback-text-superclass';
import { DefaultComponent } from './components/default/default.component';


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
    FeedbackTextProviderComponent,
    // SUPERCLASS
    FeedBackTextSuperClass,
    // TITLES COMPONENTS :
    DefaultComponent,
  ],
  exports: [
    FeedbackTextProviderComponent
  ]
})
export class ExerciceFeedbackTextModule { }
