import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiStepperModule } from '@platon/shared/ui/stepper';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { CreateResourceComponent } from './create-resource.component';
import { CreateResourceRoutingModule } from './create-resource-routing.module';


@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,


        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzSpinModule,
        NzIconModule,
        NzStepsModule,
        NzSelectModule,
        NzMessageModule,
        NzSkeletonModule,

        CoreAuthModule,
        SharedUiStepperModule,
        FeatureWorkspaceModule,

        CreateResourceRoutingModule
  ],
  declarations: [CreateResourceComponent]
})
export class CreateResourceModule { }
