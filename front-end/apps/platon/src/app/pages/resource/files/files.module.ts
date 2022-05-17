import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';


import { FilesComponent } from './files.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzSpinModule,
        NzFormModule,
        NzButtonModule,
        NzSelectModule,

        FeatureWorkspaceModule,

        RouterModule.forChild([{ path: '', component: FilesComponent }])
    ],
    declarations: [FilesComponent]
})
export class FilesModule { }
