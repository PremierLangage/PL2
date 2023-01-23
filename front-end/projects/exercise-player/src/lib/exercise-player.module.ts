import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { IconsProviderModule } from './icons-provider.module';


import { ExercisePlayerComponent } from './exercise-player.component';

import { FormsPlayerModule } from './forms-player/forms-player.module';

import { EpLayoutProviderComponent } from './ep-layout/ep-layout-provider.component';
// LAYOUT PROVIDER :
import { DefaultComponent as EPL_Default} from './ep-layout/components/default/default.component';
import { RowComponent as EPL_Row } from './ep-layout/components/row/row.component';
import { TabComponent as EPL_Tab } from './ep-layout/components/tab/tab.component';
import { EpStatementComponent } from './ep-layout/ep-statement/ep-statement.component';

// NGZORRO
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMenuModule } from 'ng-zorro-antd/menu';





@NgModule({
  declarations: [
    ExercisePlayerComponent,
    EpStatementComponent,
    EpLayoutProviderComponent,
    EPL_Default, EPL_Row, EPL_Tab
  ],
  imports: [
    CommonModule,
    MarkdownModule,
    IconsProviderModule,
    FormsPlayerModule,

    // NGZORRO
    NzBreadCrumbModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzTagModule,
    NzIconModule,
    NzDividerModule,
    NzSkeletonModule,
    NzSpinModule,
    NzMenuModule
  ],
  exports: [
    ExercisePlayerComponent
  ]
})
export class ExercisePlayerModule { }
