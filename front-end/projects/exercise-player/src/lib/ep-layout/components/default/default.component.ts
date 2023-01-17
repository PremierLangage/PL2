import { Component } from '@angular/core';
import { EpLayoutProviderSuperClass } from '../../ep-layout-provider.superclass';

@Component({
  selector: 'ep-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends EpLayoutProviderSuperClass {}
