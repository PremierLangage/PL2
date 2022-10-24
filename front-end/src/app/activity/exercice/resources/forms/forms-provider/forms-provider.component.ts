import { Component, Input, ViewChild } from '@angular/core';
import { formState } from '../../../models/exercice';
import { ProviderFormTypes } from '../../../models/providers/form';


@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
})
export class FormsProviderComponent {
  @Input() form?: formState;
  @ViewChild('child') formComponent?: ProviderFormTypes;
}