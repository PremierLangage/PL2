import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceReviewerComponent } from './exercice-reviewer.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ExerciceFormsModule } from '../../exercice-forms.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    NzDividerModule,
    ExerciceFormsModule,
    MarkdownModule
  ],
  declarations: [ExerciceReviewerComponent]
})
export class ExerciceReviewerModule { }
