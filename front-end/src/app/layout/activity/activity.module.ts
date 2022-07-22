import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity.component';
import { TemplateProviderComponent } from './resources/templates/template-provider/template-provider.component';
import { ActivityTemplateModule } from './resources/templates/activity-template.module';

@NgModule({
  imports: [
    CommonModule,
    ActivityTemplateModule
  ],
  declarations: [ActivityComponent],
  exports: [ActivityComponent]
})
export class ActivityModule { }
