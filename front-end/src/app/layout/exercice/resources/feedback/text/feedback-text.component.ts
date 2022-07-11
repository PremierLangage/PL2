import { Component, Input } from '@angular/core';
import { exerciceFeedBack } from 'src/app/models/exercice';

@Component({
  selector: 'app-feedback-text',
  template: '<markdown>{{this.feedback}}</markdown>',
})
export class FeedbackTextComponent {

  @Input() set exercice(value: exerciceFeedBack | undefined) {
    this.feedback = value?.feedback ?? "";
  }

  feedback: string = "";
}
