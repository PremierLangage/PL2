import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivityService } from './activity.service';
import { activity, PRESENTATIONKEY } from './models/activity';
import { cexActivity } from './models/constUsed/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  constructor(
    private http : ActivityService
  ) {
    this.__activity = cexActivity;
    this.__activity.exercices[PRESENTATIONKEY] = {uri: "", title: "presentation"};
    if (!this.__activity.currentExercice)
      this.__activity.currentExercice = PRESENTATIONKEY;
  }
  __activity: activity;
  __exerciceSelector = new BehaviorSubject<string>("");
}

