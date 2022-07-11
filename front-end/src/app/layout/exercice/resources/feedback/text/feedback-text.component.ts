import { Component, Input } from '@angular/core';
import { exerciceFeedBack } from 'src/app/models/exercice';

@Component({
  selector: 'app-feedback-text',
  template: '<markdown>{{this.feedback_}}</markdown>',
})
export class FeedbackTextComponent {

  @Input() set feedback(value: exerciceFeedBack | undefined) {
    this.feedback_ = value?.feedback ?? "";
  }

  feedback_: string = "";
}
