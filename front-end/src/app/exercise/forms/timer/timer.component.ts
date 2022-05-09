import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { TimerComponentDefinition, TimerState } from './timer';

@Component({
    selector: 'wc-timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(TimerComponentDefinition)
export class TimerComponent implements WebComponentHooks<TimerState> {
    @Input() state!: TimerState;
    constructor(
        readonly injector: Injector
    ) {}
}
