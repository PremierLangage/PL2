import { Component, OnInit } from '@angular/core';
import { FeedBackScoreSuperClass } from '../../feedback-score-superclass';

@Component({
  selector: 'exercice-feedback-score-default-result',
  templateUrl: './default-result.component.html',
  styleUrls: ['./default-result.component.scss']
})
export class DefaultResultComponent extends FeedBackScoreSuperClass {

  getStatus() {
    return (this.feedback?.score == 100) ? 'success' : 'error';
  }

}
