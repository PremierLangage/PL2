import { NgModule, Type } from '@angular/core';
import { NgeMonacoModule } from '@mcisse/nge/monaco';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseModule } from '../../shared/components/base/base.module';
import { CodeEditorComponent } from './code-editor.component';

@NgModule({
    declarations: [CodeEditorComponent],
    imports: [
        BaseModule,
        MatTooltipModule,
        NgeMonacoModule,
    ],
    exports: [CodeEditorComponent],
})
export class CodeEditorModule {
    customElementComponent: Type<any> = CodeEditorComponent;
}
