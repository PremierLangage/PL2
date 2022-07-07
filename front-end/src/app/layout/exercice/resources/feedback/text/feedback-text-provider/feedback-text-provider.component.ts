import { Component, Input, OnInit } from '@angular/core';
import { exercice, exerciceFeedBack } from 'src/app/models/exercice';

@Component({
  selector: 'app-feedback-text-provider',
  templateUrl: './feedback-text-provider.component.html',
})
export class FeedbackTextProviderComponent {

  @Input() feedback?: exerciceFeedBack;
  @Input() exercice?: exercice;

}
