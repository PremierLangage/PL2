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

  getValues() : string {
    return JSON.stringify(this.grid);
  }
  
  getTotalScore() : number {
    let result = 0;
    if (this.grid) {
      this.grid.correction.forEach(e => result += e.note || 0) 
      return result;
    }
    return -1
  }

  getFlooredScore() : number {
    if (this.grid) {
      let result = this.getTotalScore();
      result = Math.min(this.grid.noteRange.max || result, result)
      return Math.max(this.grid.noteRange.min || result, result);
    }
    return -1;
  }
}
