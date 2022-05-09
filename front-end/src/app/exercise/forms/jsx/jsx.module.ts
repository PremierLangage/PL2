import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { JsxComponent } from './jsx.component';

@NgModule({
    declarations: [JsxComponent],
    imports: [
        BaseModule
    ],
    exports: [JsxComponent],
})
export class JsxModule {
    customElementComponent: Type<any> = JsxComponent;
}
