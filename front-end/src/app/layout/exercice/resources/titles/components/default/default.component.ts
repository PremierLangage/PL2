import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'exercice-title-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() title?:    string;
  @Input() version?:  string;
  @Input() author?:   string;

  ngOnInit() {    
  }

}
