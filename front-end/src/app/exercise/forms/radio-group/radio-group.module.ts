import { NgModule, Type } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { BaseModule } from '../../shared/components/base/base.module';
import { CssPipeModule } from '../../shared/pipes/css.pipe';
import { NgeMarkdownModule } from '@mcisse/nge/markdown';

import { RadioGroupComponent } from './radio-group.component';

@NgModule({
    declarations: [RadioGroupComponent],
    imports: [
        BaseModule,
        CssPipeModule,
        NgeMarkdownModule,

        FormsModule,
        MatRadioModule,
    ],
    exports: [RadioGroupComponent],
})
export class RadioGroupModule {
    customElementComponent: Type<any> = RadioGroupComponent;
}
