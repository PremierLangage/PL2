import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';
import { exercice } from '../../models/exercice';

// ChangeDetectionStrategy, ChangeDetectorRef
@Component({
  selector: 'app-exercice-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {

  constructor(  ) { }

  @Input() 
  set exercice(value: exercice | undefined) {
    this._exercice = value;
  }
  get exercice() {
    return this._exercice;
  }
  _exercice ?: exercice;

  // @HostBinding("style.--titleAlignment")
  // titlealignement : string = "center";

  log() {
    console.log(this.exercice);
  }
}
