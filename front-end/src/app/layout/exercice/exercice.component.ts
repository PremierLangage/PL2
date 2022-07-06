import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { exercice } from 'src/app/models/exercice';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit, AfterViewInit {

  @Input() exercice? : exercice;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(JSON.stringify(this.exercice));
  }

}
