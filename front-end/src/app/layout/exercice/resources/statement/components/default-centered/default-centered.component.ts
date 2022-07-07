import { Component, Input, OnInit } from '@angular/core';
import { StatementSuperclass } from '../../statement-superclass';

@Component({
  selector: 'exercice-statement-default-centered',
  templateUrl: './default-centered.component.html',
  styleUrls: ['./default-centered.component.scss']
})
export class DefaultCenteredComponent extends StatementSuperclass {
}
