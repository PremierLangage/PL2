import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { InputBoxComponent } from './input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconGrPipeModule } from '@platon/shared/utils';

@NgModule({
    declarations: [InputBoxComponent],
    imports: [
        BaseModule,
        IconGrPipeModule,

        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ],
    exports: [InputBoxComponent],
})
export class InputBoxModule {
    customElementComponent: Type<any> = InputBoxComponent;
}
