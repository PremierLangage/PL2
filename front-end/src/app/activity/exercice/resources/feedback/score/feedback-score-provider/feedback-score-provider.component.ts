import { Component, Input } from '@angular/core';
import { exercice, exerciceFeedBack } from '../../../../models/exercice';

@Component({
  selector: 'app-feedback-score-provider',
  templateUrl: './feedback-score-provider.component.html',
})
export class FeedbackScoreProviderComponent {
  @Input() feedback?: exerciceFeedBack;
  @Input() exercice?: exercice;
}
