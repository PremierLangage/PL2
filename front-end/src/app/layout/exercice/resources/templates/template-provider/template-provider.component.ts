import { Component, Input, OnInit } from '@angular/core';
import { exercice, exerciceFeedBack } from 'src/app/models/exercice';

@Component({
  selector: 'app-exercice-template-provider',
  templateUrl: './template-provider.component.html',
})
export class TemplateProviderComponent {
  @Input() exercice?: exercice;
  @Input() feedback?: exerciceFeedBack;
}
