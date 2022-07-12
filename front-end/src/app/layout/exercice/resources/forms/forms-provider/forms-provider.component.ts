import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { exercice, formState } from 'src/app/models/exercice';
import { InputBoxComponent } from '../components/input-box/input-box.component';
import { RadioGroupComponent } from '../components/radio-group/radio-group.component';

@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
})
export class FormsProviderComponent {

  @Input() form?: formState;
  @ViewChild('child') formComponent?: RadioGroupComponent | InputBoxComponent;


  displayOutput(): void {
    if (this.form)
      this.form.output = this.formComponent?.getOutput();
    console.log(JSON.stringify(this.form));
  }
}
