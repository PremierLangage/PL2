import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PickerComponent } from './picker.component';
import { FormsModule } from '@angular/forms';
import { IconGrPipeModule } from '@platon/shared/utils';

@NgModule({
    declarations: [PickerComponent],
    imports: [
        BaseModule,
        FormsModule,
        IconGrPipeModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    exports: [PickerComponent],
})
export class PickerModule {
    customElementComponent: Type<any> = PickerComponent;
}
