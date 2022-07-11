import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { formState } from 'src/app/models/exercice';
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
    this.horizontal = this.radioData.horizontal;
    this.disabled = this.radioData.disabled;
  }
  
  radioData?: RadioGroupForm;
  horizontal: boolean = true;
  disabled: boolean = false;

  trackBy(index: number, item: RadioGroupItem) {
    return item.content || index;
  }
}