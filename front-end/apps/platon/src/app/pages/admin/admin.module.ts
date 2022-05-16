
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        AdminRoutingModule,
    ],
    providers: [],
})
export class AdminModule {}
