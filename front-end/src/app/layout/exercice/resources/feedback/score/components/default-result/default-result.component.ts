import { Component } from '@angular/core';
import { FeedBackScoreSuperClass } from '../../feedback-score-superclass';

@Component({
selector: 'exercice-feedback-score-default-result',
templateUrl: './default-result.component.html',
styleUrls: ['./default-result.component.scss']
})
export class DefaultResultComponent extends FeedBackScoreSuperClass {

getScoreEmoji() {
    if (this.feedback) {
        if (this.feedback.score == 100) {
            return "check-circle";
        } else if (this.feedback.score >= 80) {
            return "smile";
        } else if (this.feedback.score >= 50) {
            return "meh";
        } else {
            return "close-circle";
        }
    }
    return "loading"
}

getScoreEmojiAnimation() {
    if (this.feedback) {
        if (this.feedback.score == 100) {
            return "animate__pulse animate__infinite animate__animated animate__heartBeat text";
        } else if (this.feedback.score >= 80) {
            return "animate__animated animate__infinite animate__bounce text";
        } else if (this.feedback.score >= 50) {
            return "animate__animated animate__infinite animate__swing text";
        } else {
            return "animate__animated animate__infinite animate__rubberBand text";
        }
    }
    return "loading"
}
}
