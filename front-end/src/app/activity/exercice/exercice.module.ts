import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceComponent } from './exercice.component';
import { ExerciceTemplateModule } from './resources/templates/exercice-template.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ExerciceModifierComponent } from './exercice-modifier/exercice-modifier.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormlyformModule } from './resources/forms/components/formlyform/formlyform.module';
import { MarkdownModule } from 'ngx-markdown';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

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
        NzSwitchModule,
        FormlyModule,
        FormsModule,
        ReactiveFormsModule,
        NzDividerModule,
        NzTypographyModule,
        MarkdownModule,

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