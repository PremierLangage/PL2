import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FeedBackScoreSuperClass } from '../../feedback-score-superclass';

@Component({
selector: 'exercice-feedback-score-default',
templateUrl: './default.component.html',
styleUrls: ['./default.component.scss'],
animations: [
    trigger('fadeSlideInOutUpward', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(10px)' }),
            animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
        transition(':leave', [
            animate('500ms', style({ opacity: 0, transform: 'translateX(10px)' })),
        ]),
    ]),
    trigger('fadeSlideInOutLeftToRight', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(10px)' }),
            animate('500ms', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
        transition(':leave', [
        ]),
    ]),
]
})
export class DefaultComponent extends FeedBackScoreSuperClass {

    getScoreColor(alpha: string) {
        if (this.feedback) {
            if (this.feedback) {
                let redVal = 200 - (this.feedback.score*2);
                let greenVal = (this.feedback.score*2);
                return `rgba(${redVal}, ${greenVal}, ${(this.feedback.score >= 50) ? redVal : greenVal}, ${alpha})`;
                // return `linear-gradient(rgba(${redVal}, ${greenVal}, 0, 0.350), rgba(85,0,255, 0.350))`;
            }
        }
        return "white";
    }

    getScoreEmoji() {
        if (this.feedback) {
            if (this.feedback.score == 100) {
                return "trophy";
            } else if (this.feedback.score >= 80) {
                return "smile";
            } else if (this.feedback.score >= 50) {
                return "meh";
            } else {
                return "frown";
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
