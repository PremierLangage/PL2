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

  constructor(private service: ExerciceService,
    private messageService: NzMessageService)
  {}

  @Input() get URI(): string { return this.__uri;} 
  set URI(value: string) {
    this.__uri = value;
    this.service.getExercice(this.__uri).subscribe(packet => this.exercice = packet as exercice);
  }
  
  __uri: string = "";
  exercice? : exercice;
  feedback?: exerciceFeedBack;
  loading = false;

  logExo() {
    console.log(JSON.stringify(this.exercice));
  }

  submitForm(): void {
    if (this.loading) return;
    this.loading = true;
    if (this.exercice?.process.formState.form) {
      this.exercice.process.formState.form.disabled = true;
      
      const loadingMessageID = this.messageService.loading('Évaluation de votre réponse', { nzDuration: 0 }).messageId;

      setTimeout(() => {
        if (this.exercice)
          this.service.sendformState(this.exercice.process.formState, this.URI)
        .subscribe(packet => {
          this.messageService.remove(loadingMessageID);
          this.messageService.success('Évaluation Terminée!', { nzDuration: 2500 })
          if (packet.gotFeedback)
            this.feedback = packet.feedback;
          this.loading = false;
          if (this.exercice?.process.formState.form)
            this.exercice.process.formState.form.disabled = false;
        });
      }, 1000);
    }

  }

  updateExercice(eventData : exercice) {
    this.exercice = eventData;
  }
}
