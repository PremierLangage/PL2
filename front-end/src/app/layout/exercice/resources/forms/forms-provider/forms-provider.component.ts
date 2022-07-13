import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { exercice, formState } from 'src/app/models/exercice';
import { InputBoxComponent } from '../components/input-box/input-box.component';
import { RadioGroupComponent } from '../components/radio-group/radio-group.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs';


@Component({
  selector: 'app-forms-provider',
  templateUrl: './forms-provider.component.html',
})
export class FormsProviderComponent {

  constructor(private messageService: NzMessageService) {}
  @Input() form?: formState;
  @ViewChild('child') formComponent?: RadioGroupComponent | InputBoxComponent;

  loading = false;
  submitForm(): void {
    if (this.loading) return;
    this.loading = true;
    if (this.form) {
      this.form.output = this.formComponent?.getOutput();
      this.form.form.disabled = true;
      
      this.messageService.loading('Envoie de votre réponse au serveur', { nzDuration: 2500 }).onClose!.pipe(
        concatMap(
          () => {
            this.messageService.success('Envoie Réussi !', { nzDuration: 2500 }).onClose!;
          return this.messageService.loading('En attente de la correction du serveur', { nzDuration: 2500 }).onClose!
        }),
        concatMap(() => this.messageService.success('Correction récupérée ! Affichage du résultat', { nzDuration: 2500 }).onClose!)

      ).subscribe(() => {
        console.log("All done!");
        console.log(JSON.stringify(this.form));
        this.loading = false;
        if (this.form)
          this.form.form.disabled = false;
      });
    }

  }

}
