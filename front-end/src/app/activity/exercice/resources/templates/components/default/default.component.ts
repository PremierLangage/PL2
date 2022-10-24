import { Component } from '@angular/core';
import { TemplateSuperclass } from '../../template-superclass';

@Component({
  selector: 'exercice-templates-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends TemplateSuperclass {
}
