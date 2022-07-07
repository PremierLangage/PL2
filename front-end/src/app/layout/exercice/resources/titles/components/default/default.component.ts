import { Component } from '@angular/core';
import { TitleSuperClass } from '../../title-superclass';


@Component({
  selector: 'exercice-title-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends TitleSuperClass{
}
