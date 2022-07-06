import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { ExerciceTitlesModule } from '../titles/exercice-titles.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciceTitlesModule
  ],
  declarations: [
    DefaultComponent
  ],
  exports: [
    DefaultComponent
  ]
})
export class ExerciceTemplateModule { }
