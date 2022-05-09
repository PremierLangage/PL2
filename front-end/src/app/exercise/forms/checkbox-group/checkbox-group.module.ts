import { NgModule, Type } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxGroupComponent } from './checkbox-group.component';

import { BaseModule } from '../../shared/components/base/base.module';
import { CssPipeModule } from '../../shared/pipes/css.pipe';

import { NgeMarkdownModule } from '@mcisse/nge/markdown';

@NgModule({
    declarations: [CheckboxGroupComponent],
    imports: [
        BaseModule,
        CssPipeModule,
        MatCheckboxModule,
        NgeMarkdownModule,
    ],
    exports: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {
    customElementComponent: Type<any> = CheckboxGroupComponent;
}
