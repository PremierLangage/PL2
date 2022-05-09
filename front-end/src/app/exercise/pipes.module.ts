import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipeM } from './safe.pipe';
import { ExercisePipe } from './exercise.pipe';



@NgModule( {
    declarations: [
        SafePipeM,
        ExercisePipe
    ],
    exports: [
        SafePipeM,
        ExercisePipe
    ],
    imports: [
        CommonModule
    ]
} )
export class PipesModule { }