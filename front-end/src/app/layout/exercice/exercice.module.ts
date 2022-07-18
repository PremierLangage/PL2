import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceComponent } from './exercice.component';
import { ExerciceTemplateModule } from './resources/templates/exercice-template.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzMessageModule } from 'ng-zorro-antd/message';

const DECLARATIONS = [
    ExerciceComponent
]

@NgModule({
    imports: [
        CommonModule,
        ExerciceTemplateModule,

        NzButtonModule,
        NzAffixModule,
        NzMessageModule
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class ExerciceModule {}