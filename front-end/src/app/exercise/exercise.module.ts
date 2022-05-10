import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseComponent } from './exercise.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [ExerciseComponent, ShowcaseComponent],
  exports: [ExerciseModule]
})
export class ExerciseModule {
    component = ExerciseComponent;
}
