import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { exercice, exerciceFeedBack } from '../../../models/exercice';

@Component({
  selector: 'app-exercice-template-provider',
  templateUrl: './template-provider.component.html',
})
export class TemplateProviderComponent {
  @Input() exercice?: exercice;
  @Input() feedback?: exerciceFeedBack;

  log() {
    console.log(this.exercice);
  }
}
