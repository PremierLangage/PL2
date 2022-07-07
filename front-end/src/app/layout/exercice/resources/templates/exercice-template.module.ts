import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { ExerciceTitlesModule } from '../titles/exercice-titles.module';
import { ExerciceStatementModule } from '../statement/exercice-statement.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciceTitlesModule,
    ExerciceStatementModule,
  ],
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ]
})
export class ExerciceTemplateModule { }
