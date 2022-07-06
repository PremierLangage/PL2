import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'exercice-title-default-left',
  templateUrl: './default-left.component.html',
  styleUrls: ['./default-left.component.scss']
})
export class DefaultLeftComponent implements OnInit {

  @Input() title?:    string;
  @Input() version?:  string;
  @Input() author?:   string;
  
  constructor() { }

  ngOnInit() {
  }

}
