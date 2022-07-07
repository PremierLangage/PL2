import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


import { StatementProviderComponent } from './statement-provider/statement-provider.component';


import { DefaultComponent } from './components/default/default.component';
import { DefaultCenteredComponent } from './components/default-centered/default-centered.component';
import { StatementSuperclass } from './statement-superclass';


@NgModule({
  imports: [
    CommonModule,
    NzIconModule,
    NzTypographyModule
  ],
  declarations: [
    // PROVIDER:
    StatementProviderComponent,
    // SUPERCLASS:
    StatementSuperclass,
    // STATEMENT COMPONENTS :
    DefaultComponent,
    DefaultCenteredComponent
  ],
  exports: [
    StatementProviderComponent,
  ]
})
export class ExerciceStatementModule { }
