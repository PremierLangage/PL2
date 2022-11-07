import { Component, OnInit } from '@angular/core';
import { cexActivityCorrectionGrid } from './models/constUsed/activity';

@Component({
  selector: 'app-activity-reviewer',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityReviewerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cexCG = cexActivityCorrectionGrid;
}
