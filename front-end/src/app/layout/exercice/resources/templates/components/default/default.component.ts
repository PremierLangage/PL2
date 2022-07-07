import { Component, Input, OnInit } from '@angular/core';
import { exercice, exerciceFeedBack} from 'src/app/models/exercice';
import { cexFeedBackUsed } from "src/app/models/constUsed";

@Component({
  selector: 'exercice-templates-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  @Input() exercice? : exercice;
  feedback : exerciceFeedBack;
  constructor() {
    this.feedback = cexFeedBackUsed;
  }

  ngOnInit() {
  }

}
