import { AfterViewInit, Component, Input } from '@angular/core';
import { cexFeedBackUsed } from './models/constUsed/constUsed';
import { exercice, exerciceFeedBack } from './models/exercice';


@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements AfterViewInit {

  @Input() exercice? : exercice;
  feedback?: exerciceFeedBack;

  gotFeedBack = false;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(JSON.stringify(this.exercice));
  }

  switchFeedBack() {
    
    this.gotFeedBack = !this.gotFeedBack;
    this.feedback = this.gotFeedBack ? cexFeedBackUsed : undefined;
  }

  logExo() {
    console.log(JSON.stringify(this.exercice?.process.formState));
  }
}
