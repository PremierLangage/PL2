import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSuperclass } from './template-superclass';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TemplateProviderComponent } from './template-provider/template-provider.component';
import { MarkdownModule } from 'ngx-markdown';
import { ExerciceModule } from 'src/app/layout/exercice/exercice.module';
import { DefaultComponent } from './components/default/default.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { ExerciceListModule } from '../exercice-list/exercice-list-template.module';
import { ActivityContentLoaderComponent } from '../activity-content-loader/activity-content-loader.component';



const TEMPLATE_DECLARATION = [
  DefaultComponent,

]

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    FormsModule,
    NzDividerModule,
    NzTabsModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzRateModule,

    ExerciceModule,
    ExerciceListModule,
  ],
  declarations: [
    TemplateProviderComponent,
    ActivityContentLoaderComponent,
    ...TEMPLATE_DECLARATION,
  ],
  exports: [
    TemplateProviderComponent
  ]
})
export class ActivityTemplateModule { }
