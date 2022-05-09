import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { IconGrPipeModule } from '@platon/shared/utils';
import { BaseModule } from '../../shared/components/base/base.module';

import { MathLiveComponent } from './math-live.component';

@NgModule({
    declarations: [MathLiveComponent],
    imports: [
        BaseModule,
        IconGrPipeModule,
    ],
    exports: [MathLiveComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MathLiveModule {
    customElementComponent: Type<any> = MathLiveComponent;
}
