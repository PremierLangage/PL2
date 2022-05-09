import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { HintComponentDefinition, HintState } from './hint';

@Component({
    selector: 'wc-hint',
    templateUrl: 'hint.component.html',
    styleUrls: ['hint.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(HintComponentDefinition)
export class HintComponent implements WebComponentHooks<HintState> {
    @Input() state!: HintState;
    constructor(
        readonly injector: Injector
    ) {}
}
