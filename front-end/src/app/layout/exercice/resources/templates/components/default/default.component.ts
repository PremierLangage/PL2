import { Component, Input, OnInit } from '@angular/core';
import { exercice } from 'src/app/models/exercice';

@Component({
  selector: 'exercice-templates-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() exercice? : exercice;

  constructor() { }

  ngOnInit() {
  }

}
