import { Component, Input, OnInit } from '@angular/core';
import { StatementSuperclass } from '../../statement-superclass';

@Component({
  selector: 'exercice-statement-default',
  templateUrl: './default.component.html',
})
export class DefaultComponent extends StatementSuperclass {
}
