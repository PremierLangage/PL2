import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputBoxComponent } from './input-box.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


import { ReactiveFormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    NzAutocompleteModule,
    NzInputNumberModule,
    FormsModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    NzTypographyModule,
    NzSpaceModule,
    NzCommentModule,
    NzAvatarModule,
    NzToolTipModule,
    
    MarkdownModule

  ],
  declarations: [InputBoxComponent],
  exports: [InputBoxComponent]
})
export class InputBoxModule { }
