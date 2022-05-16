import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-circle-invitation-form',
    templateUrl: './invitation-form.component.html',
    styleUrls: ['./invitation-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitationFormComponent {
    readonly form = new FormGroup({
        'status': new FormControl('MEMBER', Validators.required),
        'invitee': new FormControl(undefined, Validators.required),
    });

    @Input()
    excludes: string[] = [];

    @Output()
    didSubmit = new EventEmitter<any>();
}
