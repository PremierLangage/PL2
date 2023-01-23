import { Component, Input, OnInit } from '@angular/core';
import { getTagColor } from './models/const';
import { CExercise } from './models/const';

@Component({
  selector: 'lib-exercisePlayer',
  templateUrl: 'exercise-player.component.html',
  styleUrls: [
    'exercise-player.component.scss',
  ]
})
export class ExercisePlayerComponent implements OnInit {


  exercise = CExercise;
  context = "Activity/l1/platon"



  color(str : string) {
    return getTagColor(str);
  }

  constructor() { }

  ngOnInit(): void {
  }


  log() {
    console.log(JSON.stringify(this.exercise));
  }
}
