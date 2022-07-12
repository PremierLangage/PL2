import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBoxComponent } from './input-box.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NzAutocompleteModule,
    NzInputNumberModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule

  ],
  declarations: [InputBoxComponent],
  exports: [InputBoxComponent]
})
export class InputBoxModule { }
