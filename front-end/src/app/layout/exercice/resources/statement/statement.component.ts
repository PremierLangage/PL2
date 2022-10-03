import { Component, Input } from '@angular/core';
import { exercice } from '../../models/exercice';

@Component({
  selector: 'app-exercice-statement',
  template: '<markdown [data]="this._exercice?.process?.statement"></markdown>'
})
export class StatementComponent {
  @Input() set exercice(value : exercice | undefined ) {
    this._exercice = value;
  }
  get exercice() { return this._exercice; }
  _exercice?: exercice;

  
  log() {
    console.log(JSON.stringify(this.exercice));
  }
}
