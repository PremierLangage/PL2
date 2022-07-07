import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { ExerciceTitlesModule } from '../titles/exercice-titles.module';
import { ExerciceStatementModule } from '../statement/exercice-statement.module';
import { ExerciceFeedbackScoreModule } from '../feedback/score/exercice-feedback-score.module';
import { ExerciceFeedbackTextModule } from '../feedback/text/exercice-feedback-text.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciceTitlesModule,
    ExerciceStatementModule,
    ExerciceFeedbackScoreModule,
    ExerciceFeedbackTextModule,
  ],
  declarations: [
    DefaultComponent,
  ],
  exports: [
    DefaultComponent,
    ExerciceTitlesModule,
    ExerciceStatementModule,
  ]
})
export class ExerciceTemplateModule { }
