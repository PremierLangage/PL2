import { Component, Input } from '@angular/core';
import { activity } from '../../../models/activity';

@Component({
  selector: 'app-exercice-list-provider',
  templateUrl: './exercice-list-provider.component.html'
})
export class ExerciceListProviderComponent{
  @Input() activity?: activity;
}
