import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { TimerComponent } from './timer.component';

@NgModule({
    declarations: [TimerComponent],
    imports: [
        BaseModule
    ],
    exports: [TimerComponent],
})
export class TimerModule {
    customElementComponent: Type<any> = TimerComponent;
}
