import { Component } from '@angular/core';
import { WebComponentDefinition } from './web-component/web-component';

@Component({
  selector: 'wc-exercise',
  templateUrl: './wc-exercise.component.html',
  styleUrls: ['./wc-exercise.component.scss']
})
export class ExerciseComponent {
    definition!: WebComponentDefinition;
}
