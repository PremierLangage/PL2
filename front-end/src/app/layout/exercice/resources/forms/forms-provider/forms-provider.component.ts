import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { exercice, formState } from 'src/app/models/exercice';
import { RadioGroupComponent } from '../components/radio-group/radio-group.component';

@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
})
export class FormsProviderComponent {

  @Input() form?: formState;
  @ViewChild('child') formComponent?: RadioGroupComponent;


  displayOutput(): void {
    if (this.form)
      this.form.output = this.formComponent?.getOutput();
    console.log(JSON.stringify(this.formComponent?.getOutput()));
  }
}
