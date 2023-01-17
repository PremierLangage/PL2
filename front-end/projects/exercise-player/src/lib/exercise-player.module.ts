import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { IconsProviderModule } from './icons-provider.module';


import { ExercisePlayerComponent } from './exercise-player.component';


import { EpLayoutProviderComponent } from './ep-layout/ep-layout-provider.component';
// LAYOUT PROVIDER :
import { DefaultComponent as EPL_Default} from './ep-layout/components/default/default.component';
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
import { FormsPlayerModule } from './forms-player/forms-player.module';




@NgModule({
  declarations: [
    ExercisePlayerComponent,
    EpStatementComponent,
    EpLayoutProviderComponent,
    EPL_Default
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
    NzSpinModule  
  ],
  exports: [
    ExercisePlayerComponent
  ]
})
export class ExercisePlayerModule { }
