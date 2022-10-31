import { Component, OnInit } from '@angular/core';
import { formState } from 'src/app/activity/exercice/models/exercice';
import { FormSuperclass } from '../../form-superclass';
import { ExerciceReviewerForm } from './exercise-reviewer';

@Component({
  selector: 'form-exercice-reviewer',
  templateUrl: './exercice-reviewer.component.html',
  styleUrls: ['./exercice-reviewer.component.scss']
})
export class ExerciceReviewerComponent extends FormSuperclass {
  initData(value: formState): void {
    this.exerciceReviewerData = value.form as ExerciceReviewerForm;
  }

  exerciceReviewerData?: ExerciceReviewerForm;
}
