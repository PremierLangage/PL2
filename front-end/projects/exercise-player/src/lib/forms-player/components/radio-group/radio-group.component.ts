import { Component } from '@angular/core';
import { formState } from '../../../models/exercise';
import { FormSuperclass } from '../../form-superclass';
import { RadioGroupForm, RadioGroupItem } from './radio-group';

@Component({
  selector: 'form-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent extends FormSuperclass {

  initData(value: formState): void {
    this.radioData = value.form as RadioGroupForm;
  }
  
  radioData?: RadioGroupForm;

  trackBy(index: number, item: RadioGroupItem) {
    return item.content || index;
  }
}