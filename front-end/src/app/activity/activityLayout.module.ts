import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceTemplateModule } from './exercice/resources/templates/exercice-template.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { ExerciceModule } from './exercice/exercice.module';

const DECLARATIONS = [
    ExerciceModule
]

@NgModule({
    imports: [
        CommonModule,
        ExerciceTemplateModule,

        NzButtonModule,
        NzAffixModule
    ],
    exports: [
        ...DECLARATIONS,
    ],
})
export class ActivitySharedLayoutModule {}