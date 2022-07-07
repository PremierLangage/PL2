import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { exercice } from 'src/app/models/exercice';

@Component({
  selector: 'app-statement-provider',
  templateUrl: './statement-provider.component.html'
})
export class StatementProviderComponent implements AfterViewInit {
  @Input() exercice?: exercice;

  statement?: string;
  
  constructor() { }

  ngAfterViewInit(): void {
    this.statement = this.exercice?.process.statement;
  }

}
