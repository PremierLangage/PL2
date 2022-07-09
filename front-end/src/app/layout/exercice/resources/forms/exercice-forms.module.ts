import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { FormsProviderComponent } from './forms-provider/forms-provider.component';


@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTypographyModule
  ],
  declarations: [
    // PROVIDER
    FormsProviderComponent,
    // SUPERCLASS
    // TITLES COMPONENTS :
  ],
  exports: [
    FormsProviderComponent
  ]
})
export class ExerciceFormsModule { }
