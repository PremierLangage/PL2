import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { CorrectionGrid } from '../models/activity';

@Component({
  selector: 'correctionGrid',
  templateUrl: './correctionGrid.component.html',
  styleUrls: ['./correctionGrid.component.scss']
})
export class CorrectionGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() grid ?: CorrectionGrid;
  @Output() gridChange = new EventEmitter<CorrectionGrid>();
}
