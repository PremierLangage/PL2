
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { ForumComponent } from './forum.component';
import { ForumRoutingModule } from './forum-routing.module';


@NgModule({
    declarations: [ForumComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        ForumRoutingModule,
    ],
    providers: [],
})
export class ForumModule {}
