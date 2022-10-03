import { Component, Input, ViewChild } from '@angular/core';
import { formState } from '../../../models/exercice';
import { CodeEditorComponent } from '../components/code-editor/code-editor.component';
import { FormlyformComponent } from '../components/formlyform/formlyform.component';
import { InputBoxComponent } from '../components/input-box/input-box.component';
import { RadioGroupComponent } from '../components/radio-group/radio-group.component';


@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
})
export class FormsProviderComponent {

  constructor() {}
  @Input() form?: formState;
  @ViewChild('child') formComponent?: RadioGroupComponent | InputBoxComponent | CodeEditorComponent | FormlyformComponent;

}
