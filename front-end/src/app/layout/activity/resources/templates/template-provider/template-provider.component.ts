import { Component, Input } from '@angular/core';
import { activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-template-provider',
  templateUrl: './template-provider.component.html',
})
export class TemplateProviderComponent {
  @Input() activity?: activity;
}
