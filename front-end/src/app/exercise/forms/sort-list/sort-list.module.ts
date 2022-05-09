import { NgModule, Type } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

import { BaseModule } from '../../shared/components/base/base.module';
import { CssPipeModule } from '../../shared/pipes/css.pipe';
import { NgeMarkdownModule } from '@mcisse/nge/markdown';

import { SortListComponent } from './sort-list.component';

@NgModule({
    declarations: [SortListComponent],
    imports: [
        BaseModule,
        CssPipeModule,
        NgeMarkdownModule,

        MatIconModule,
        DragDropModule,
    ],
    exports: [SortListComponent],
})
export class SortListModule {
    customElementComponent: Type<any> = SortListComponent;
}
