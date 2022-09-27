import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { exercice, exerciceFeedBack } from '../../../models/exercice';

@Component({
  selector: 'app-exercice-template-provider',
  templateUrl: './template-provider.component.html',
})
export class TemplateProviderComponent implements OnChanges {
  @Input() exercice?: exercice;
  @Input() feedback?: exerciceFeedBack;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("update!", changes);
  }

  log() {
    console.log(this.exercice);
  }
}
