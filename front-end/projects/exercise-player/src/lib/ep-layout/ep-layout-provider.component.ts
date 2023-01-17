import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from '../models/exercise';

@Component({
  selector: 'provider-ep-layout',
  templateUrl: './ep-layout.component.html',
  styleUrls: [
    'ep-layout-provider.component.scss'
  ]
})
export class EpLayoutProviderComponent implements OnInit {

  @Input() exercise!: Exercise;

  constructor() { }

  ngOnInit() {
  }

}