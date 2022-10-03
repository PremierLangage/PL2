import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceComponent } from './exercice.component';
import { ExerciceTemplateModule } from './resources/templates/exercice-template.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ExerciceModifierComponent } from './exercice-modifier/exercice-modifier.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormlyformModule } from './resources/forms/components/formlyform/formlyform.module';

const DECLARATIONS = [
    ExerciceComponent,
    ExerciceModifierComponent
]

@NgModule({
    imports: [
        CommonModule,
        ExerciceTemplateModule,

        NzButtonModule,
        NzAffixModule,
        NzMessageModule,
        FormlyModule,
        FormsModule,
        ReactiveFormsModule,
        NzDividerModule,

        FormlyformModule

    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class ExerciceModule {}