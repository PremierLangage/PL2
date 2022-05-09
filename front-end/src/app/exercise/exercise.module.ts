import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { BaseModule } from './shared/components/base/base.module';

import { ExerciseComponent } from './exercise.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { PipesModule } from './pipes.module';

@NgModule({
    declarations: [ExerciseComponent],
    imports: [BaseModule, NzCardModule,PipesModule],
    exports: [ExerciseComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExerciseModule {
    customElementComponent: Type<any> = ExerciseComponent;
}
