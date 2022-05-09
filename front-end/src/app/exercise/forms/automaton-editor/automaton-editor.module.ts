import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedUiDialogModule } from 'src/libs/shared/ui/dialog/src';
import { BaseModule } from '../../shared/components/base/base.module';

import { AutomatonEditorComponent } from './automaton-editor.component';

@NgModule({
    declarations: [AutomatonEditorComponent],
    imports: [
        BaseModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        SharedUiDialogModule,
    ],
    exports: [AutomatonEditorComponent],
})
export class AutomatonEditorModule {
    customElementComponent: Type<any> = AutomatonEditorComponent;
}
