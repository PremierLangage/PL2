import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { BaseModule } from '../shared/components/base/base.module';
import { ExerciseViewerComponent } from './exercise-viewer.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
    declarations: [ExerciseViewerComponent],
    imports: [BaseModule, NzCardModule],
    exports: [ExerciseViewerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExerciseViewerModule {
    customElementComponent: Type<any> = ExerciseViewerComponent;
}
