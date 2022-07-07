import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { ExerciceTitlesModule } from '../titles/exercice-titles.module';
import { ExerciceStatementModule } from '../statement/exercice-statement.module';
import { ExerciceFeedbackScoreModule } from '../feedback/score/exercice-feedback-score.module';
import { ExerciceFeedbackTextModule } from '../feedback/text/exercice-feedback-text.module';
import { TemplateSuperclass } from './template-superclass';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    ExerciceTitlesModule,
    ExerciceStatementModule,
    ExerciceFeedbackScoreModule,
    ExerciceFeedbackTextModule,

    NzDividerModule,
    NzTabsModule,
    NzSpaceModule,
    NzGridModule,
  ],
  declarations: [
    DefaultComponent,
    TemplateSuperclass,
  ],
  exports: [
    DefaultComponent,
    ExerciceTitlesModule,
    ExerciceStatementModule,
  ]
})
export class ExerciceTemplateModule { }
