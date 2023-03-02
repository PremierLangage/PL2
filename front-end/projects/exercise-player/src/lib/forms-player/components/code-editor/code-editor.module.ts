import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeEditorComponent } from './code-editor.component';

import { NgeMonacoModule } from '@cisstech/nge/monaco';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    NgeMonacoModule.forRoot({}),
    MarkdownModule
  ],
  declarations: [CodeEditorComponent],
  exports: [CodeEditorComponent]
})
export class CodeEditorModule { }
