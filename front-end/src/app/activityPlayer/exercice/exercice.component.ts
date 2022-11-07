import { Component, Input } from '@angular/core';
import { exercice, exerciceFeedBack } from './models/exercice';


@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent  {

  @Input() exercice? : exercice;
  @Input() feedback?: exerciceFeedBack;
  @Input() loading?: boolean = false;
}
