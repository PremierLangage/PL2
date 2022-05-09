import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { HintComponent } from './hint.component';

@NgModule({
    declarations: [HintComponent],
    imports: [
        BaseModule
    ],
    exports: [HintComponent],
})
export class HintModule {
    customElementComponent: Type<any> = HintComponent;
}
