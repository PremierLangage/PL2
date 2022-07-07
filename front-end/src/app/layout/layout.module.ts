import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceComponent } from './exercice/exercice.component';
import { ExerciceTemplateModule } from './exercice/resources/templates/exercice-template.module';


const DECLARATIONS = [
    ExerciceComponent
]

@NgModule({
    imports: [
        CommonModule,
        ExerciceTemplateModule,
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class SharedLayoutModule {}