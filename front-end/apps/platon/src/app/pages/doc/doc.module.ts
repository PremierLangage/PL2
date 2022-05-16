
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { DocComponent } from './doc.component';
import { DocRoutingModule } from './doc-routing.module';


@NgModule({
    declarations: [DocComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        DocRoutingModule,
    ],
    providers: [],
})
export class DocModule {}
