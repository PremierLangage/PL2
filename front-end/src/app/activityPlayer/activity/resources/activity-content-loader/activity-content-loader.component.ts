import { Component, Input } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject } from 'rxjs';
import { exercice, exerciceFeedBack } from 'src/app/activityPlayer/exercice/models/exercice';
import { ActivityService } from '../../activity.service';
import { PRESENTATIONKEY } from '../../models/activity';
import { TemplateSuperclass } from '../templates/template-superclass';

@Component({
  selector: 'app-activity-content-loader',
  templateUrl: './activity-content-loader.component.html',
  styleUrls: ['./activity-content-loader.scss']
})
export class ActivityContentLoaderComponent extends TemplateSuperclass {

  @Input() override set exerciceSelector (value : BehaviorSubject<string> | undefined) {
    this.__susbcription_save = value?.subscribe(packet1 => {
      if (packet1 != PRESENTATIONKEY)
        this.service.getExercice(packet1).subscribe(packet => this.exercice = packet as exercice);
    })
  }

  constructor(private service: ActivityService,
    private messageService: NzMessageService) {
    super();
  }

  exercice?: exercice = undefined;
  feedback?: exerciceFeedBack;
  loading = false;

  submitForm(): void {
    if (this.loading) return;
    this.loading = true;
    if (this.exercice?.process.formState.form) {
      this.exercice.process.formState.form.disabled = true;
      
      const loadingMessageID = this.messageService.loading('Évaluation de votre réponse', { nzDuration: 0 }).messageId;

      setTimeout(() => {
        if (this.exercice)
          this.service.sendformState(this.exercice.process.formState, this.__currentExercice?.uri as string)
        .subscribe(packet => {
          this.messageService.remove(loadingMessageID);
          this.messageService.success('Évaluation Terminée!', { nzDuration: 2500 })
          if (packet.gotFeedback)
            this.feedback = packet.feedback;
          this.loading = false;
          if (this.exercice?.process.formState.form)
            this.exercice.process.formState.form.disabled = false;
        });
      }, 5000);
    }

  }
  log() {
    console.log("Display Activity's Exercice:\n", JSON.stringify(this.activity ?? "not present yet"));
  }
}
