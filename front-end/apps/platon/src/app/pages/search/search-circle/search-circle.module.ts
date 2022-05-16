import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';


import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { SharedUiSearchModule } from '@platon/shared/ui/search';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

// Module
import { SearchCircleComponent } from './search-circle.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,

        MatRadioModule,
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzSpinModule,
        NzGridModule,
        NzTabsModule,
        NzButtonModule,
        NzDividerModule,
        NzSkeletonModule,
        NzNotificationModule,

        SharedUiSearchModule,
        FeatureWorkspaceModule,

        RouterModule.forChild([
            {
                path: '',
                component: SearchCircleComponent
            }
        ])
    ],
    declarations: [
        SearchCircleComponent,
        FiltersComponent,
    ]
})
export class SearchCircleModule { }
