import { Component, Input, OnInit } from '@angular/core';
import { exercice, exerciceFeedBack } from 'src/app/models/exercice';

@Component({
  selector: 'app-feedback-score-provider',
  templateUrl: './feedback-score-provider.component.html',
})
export class FeedbackScoreProviderComponent {
  @Input() feedback?: exerciceFeedBack;
  @Input() exercice?: exercice;
}
