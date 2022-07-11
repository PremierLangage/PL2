import { Component, Input, OnInit } from '@angular/core';
import { exercice } from 'src/app/models/exercice';

@Component({
  selector: 'app-exercice-statement',
  template: '<markdown>{{ this.statement }}</markdown>'
})
export class StatementComponent {
  @Input() set exercice(value: exercice | undefined) {
    this.statement = value?.process.statement ?? "";
  }

  statement: string = "";
}
