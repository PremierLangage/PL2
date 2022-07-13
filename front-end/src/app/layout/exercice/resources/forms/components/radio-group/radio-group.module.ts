import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CssPipeModule } from 'src/app/pipes/CssPipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzRadioModule,
    MatRadioModule,
    CssPipeModule
  ],
  declarations: [RadioGroupComponent],
  exports: [
    RadioGroupComponent
  ]
})
export class RadioGroupModule { }
