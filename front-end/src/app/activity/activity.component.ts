import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity/activity.service';
import { ExerciseService } from '../exercise/exercise.service';
import { ExerciseComponent } from '../exercise/exercise.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  toDisplay:string = '';
  constructor(private activityService: ActivityService,
              private exerciseService: ExerciseService
    ) {
  }

  public activity = this.activityService.activityShape;
  public exercise :any;
  events: string[] = [];
  opened: boolean = false;
  ngOnInit(): void {
  }

  setToDisplay(str:string) : void{
    this.toDisplay = str;
    this.exercise = JSON.stringify(this.exerciseService.getExercise(this.toDisplay));
    console.log(this.exercise);
  }

}
