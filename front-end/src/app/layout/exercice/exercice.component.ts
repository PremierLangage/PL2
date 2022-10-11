import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ExerciceService } from './exercice.service';
import { exercice, exerciceFeedBack } from './models/exercice';


@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent  {

  @Input() exercice? : exercice;
  @Input() feedback?: exerciceFeedBack;
  @Input() loading?: boolean = false;
}
