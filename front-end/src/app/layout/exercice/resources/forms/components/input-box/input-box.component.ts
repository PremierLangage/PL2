import {
  Component,
  OnInit,
  ViewEncapsulation} from '@angular/core';
import { formState } from 'src/app/models/exercice';
import { FormSuperclass } from '../../form-superclass';
import { InputBoxForm } from './input-box';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDistance } from 'date-fns';


@Component({
  selector: 'form-input-box',
  templateUrl: './input-box.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent extends FormSuperclass {
  
  limitedInputSizeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();
    this.limitedInputSizeForm = this.formBuilder.group({
      comment: [null, [Validators.maxLength(0)]]
    });
  }

  initData(value: formState): void {
    this.inputBoxData = value.form as InputBoxForm;
    if (this.inputBoxData.type == 'number')
      this.numberProperties = this.inputBoxData.numberProperties;
    else if (this.inputBoxData.type == 'text') {
      this.textProperties = this.inputBoxData.textProperties;
      if (this.inputBoxData.textProperties?.maxChar)
        this.limitedInputSizeForm = this.formBuilder.group({
          comment: [null, [Validators.maxLength(this.inputBoxData.textProperties.maxChar)]]
        });
    } else {
      this.textareaProperties = this.inputBoxData.textareaProperties;
      if (this.inputBoxData.textareaProperties?.maxChar)
        this.limitedInputSizeForm = this.formBuilder.group({
          comment: [null, [Validators.maxLength(this.inputBoxData.textareaProperties.maxChar)]]
        });
    }
  }

  inputBoxData?: InputBoxForm;
  
  numberProperties : any;
  textProperties : any;
  textareaProperties: any;

  suggestions?: string[];

  time = formatDistance(new Date(), new Date());
  
  suggestionsUpdate() {
    this.suggestions = 
      ((this.inputBoxData?.type === 'text') ? this.inputBoxData?.textProperties : this.inputBoxData?.textareaProperties)
      ?.completionText?.filter(s => s.startsWith(this.output));
  }

}
