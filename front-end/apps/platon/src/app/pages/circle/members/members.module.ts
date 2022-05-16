import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';


import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { MembersComponent } from './members.component';
import { MembersTableComponent } from './members-table/members-table.component';
import { InvitationFormComponent } from './invitation-form/invitation-form.component';
import { InvitationsTableComponent } from './invitations-table/invitations-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatCardModule,

        NzIconModule,
        NzFormModule,
        NzTableModule,
        NzSelectModule,
        NzButtonModule,
        NzPopconfirmModule,
        NzAutocompleteModule,

        CoreAuthModule,
        SharedUiSearchModule,

        RouterModule.forChild([{ path: '', component: MembersComponent }])
    ],
    declarations: [
        MembersComponent,
        MembersTableComponent,
        InvitationFormComponent,
        InvitationsTableComponent,
    ]
})
export class MembersModule { }
