import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyformComponent } from './formlyform.component';
import { FormlyModule,  } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
  ],
  declarations: [FormlyformComponent],
  exports : [FormlyformComponent]
})
export class FormlyformModule { }
