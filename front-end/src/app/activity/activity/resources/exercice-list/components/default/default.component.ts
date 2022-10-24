import { Component, OnInit } from '@angular/core';
import { ExerciceListSuperclass } from '../../exercice-list-superclass';

@Component({
  selector: 'exercice-list-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends ExerciceListSuperclass {

}
