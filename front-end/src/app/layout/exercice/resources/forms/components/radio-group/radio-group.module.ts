import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { CssPipeModule } from 'src/app/pipes/CssPipe.pipe';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzRadioModule,
    CssPipeModule,
    MatRadioModule,
  ],
  declarations: [RadioGroupComponent],
  exports: [
    RadioGroupComponent
  ]
})
export class RadioGroupModule { }
