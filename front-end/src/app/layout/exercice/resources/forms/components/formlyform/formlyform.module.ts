import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyformComponent } from './formlyform.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [FormlyformComponent],
  exports : [FormlyformComponent]
})
export class FormlyformModule { }
