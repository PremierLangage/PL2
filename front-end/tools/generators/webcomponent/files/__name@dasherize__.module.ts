import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { <%= classify(name) %>Component } from './<%= name %>.component';

@NgModule({
    declarations: [<%= classify(name) %>Component],
    imports: [
        BaseModule
    ],
    exports: [<%= classify(name) %>Component],
})
export class <%= classify(name) %>Module {
    customElementComponent: Type<any> = <%= classify(name) %>Component;
}
