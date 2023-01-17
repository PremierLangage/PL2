import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CorrectionGridElem } from '../models/activity';
@Component({
  selector: 'correctionGridElement',
  templateUrl: './correctionGridElement.component.html',
  styleUrls: ['./correctionGridElement.component.scss']
})
export class CorrectionGridElementComponent implements OnInit {
  ngOnInit(): void {
    if (this.gridElem && this.gridElem?.note == null)
      this.gridElem.note = (this.gridElem?.noteInfo.max + this.gridElem?.noteInfo.min) / 2;
  }
  hasComment = false;

  @Input() gridElem?: CorrectionGridElem;
  @Output() gridElemChange = new EventEmitter<CorrectionGridElem>();

  switchComment() {
    this.hasComment = ! this.hasComment;
    console.log("test");
    
  }
}
