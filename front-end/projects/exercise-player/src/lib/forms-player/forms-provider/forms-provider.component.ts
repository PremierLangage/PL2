import { Component, Input, ViewChild } from '@angular/core';
import { FormSuperInterface } from '../../models/exercise';
import { Exercise } from '../../models/exercise';


@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
  styleUrls: [
    './forms-provider.component.scss'
  ]
})
export class FormsProviderComponent {
  @Input() exercise?: Exercise;
  @ViewChild('child') formComponent?: FormSuperInterface;
}