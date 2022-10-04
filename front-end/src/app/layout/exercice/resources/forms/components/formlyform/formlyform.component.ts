import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { formState } from 'src/app/layout/exercice/models/exercice';
import { FormSuperclass } from '../../form-superclass';
import { FormlyForm } from './formlyform';

@Component({
  selector: 'form-formlyform',
  templateUrl: './formlyform.component.html',
  styleUrls: ['./formlyform.component.scss']
})
export class FormlyformComponent extends FormSuperclass{
  form = new FormGroup({});
  formlyformData?: FormlyForm;
  options: FormlyFormOptions = {};


  initData(value: formState): void {
    this.formlyformData = value.form as FormlyForm;
    this.output = {};
  }

  onSubmit(model : any) {
    console.log(this.output);
  }

}
