import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { FormsProviderComponent } from './forms-provider/forms-provider.component';
import { RadioGroupModule } from './components/radio-group/radio-group.module';
import { NzResultModule } from 'ng-zorro-antd/result';
import { CssPipeModule } from 'src/app/pipes/CssPipe.pipe';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTypographyModule,
    NzResultModule,
    NzAffixModule,
    NzButtonModule,

    // COMPONENTS :
    RadioGroupModule,
  ],
  declarations: [
    // PROVIDER :
    FormsProviderComponent,
  ],
  exports: [
    FormsProviderComponent
  ]
})
export class ExerciceFormsModule { }
