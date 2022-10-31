import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { FormsProviderComponent } from './forms-provider/forms-provider.component';
import { RadioGroupModule } from './components/radio-group/radio-group.module';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { InputBoxModule } from './components/input-box/input-box.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { CodeEditorModule } from './components/code-editor/code-editor.module';
import { FormlyformModule } from './components/formlyform/formlyform.module';
import { ExerciceReviewerModule } from './components/exercice-reviewer/exercice-reviewer.module';


const FORMS_DECLARATIONS = [
  RadioGroupModule,
  InputBoxModule,
  CodeEditorModule,
  FormlyformModule,
  ExerciceReviewerModule
];

@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTypographyModule,
    NzResultModule,
    NzAffixModule,
    NzButtonModule,
    NzSpaceModule,
    NzSkeletonModule,
    NzSpinModule,
    NzMessageModule,

    // COMPONENTS :
    ...FORMS_DECLARATIONS,
  ],
  declarations: [
    // PROVIDER :
    FormsProviderComponent,
  ],
  exports: [
    FormsProviderComponent
  ]
})
export class ExerciceFormsModule {
}
