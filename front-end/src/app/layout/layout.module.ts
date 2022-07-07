import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceComponent } from './exercice/exercice.component';
import { ExerciceTemplateModule } from './exercice/resources/templates/exercice-template.module';

import { NzButtonModule } from 'ng-zorro-antd/button';


const DECLARATIONS = [
    ExerciceComponent
]

@NgModule({
    imports: [
        CommonModule,
        ExerciceTemplateModule,

        NzButtonModule,
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class SharedLayoutModule {}