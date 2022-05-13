import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ActivityComponent implements OnInit {
  
  constructor(private service: ExerciseService) {
   
  }
  public exercise1 = this.service.exercise1;
  public exercise2 = this.service.exercise2;
  public exercise3 = this.service.exercise3;
  ngOnInit(): void {
  }
}
