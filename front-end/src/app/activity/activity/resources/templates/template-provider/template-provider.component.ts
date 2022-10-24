import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { activity } from '../../../models/activity';

@Component({
  selector: 'app-activity-template-provider',
  templateUrl: './template-provider.component.html',
})
export class TemplateProviderComponent {
  @Input() activity?: activity;
  @Input() exerciceSelector?: BehaviorSubject<string>;
}
