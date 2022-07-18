import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './components/default/default.component';
import { ExerciceFeedbackScoreModule } from '../feedback/score/exercice-feedback-score.module';
import { TemplateSuperclass } from './template-superclass';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TemplateProviderComponent } from './template-provider/template-provider.component';
import { TitleComponent } from '../title/title.component';
import { StatementComponent } from '../statement/statement.component';
import { MarkdownModule } from 'ngx-markdown';
import { FeedbackTextComponent } from '../feedback/text/feedback-text.component';
import { ExerciceFormsModule } from '../forms/exercice-forms.module';



const TEMPLATE_DECLARATION = [
  DefaultComponent
]

@NgModule({
  imports: [
    CommonModule,
    ExerciceFeedbackScoreModule,
    MarkdownModule.forRoot(),
    ExerciceFormsModule,
    NzDividerModule,
    NzTabsModule,
    NzSpaceModule,
    NzGridModule,
    NzIconModule,
  ],
  declarations: [
    ...TEMPLATE_DECLARATION,
    TemplateSuperclass,
    TemplateProviderComponent,
    TitleComponent,
    StatementComponent,
    FeedbackTextComponent
  ],
  exports: [
    TemplateProviderComponent
  ]
})
export class ExerciceTemplateModule { }
