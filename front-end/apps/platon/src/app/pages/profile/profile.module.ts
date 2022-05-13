
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        ProfileRoutingModule,
    ],
    providers: [],
})
export class ProfileModule {}
