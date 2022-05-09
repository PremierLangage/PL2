import {
    ChangeDetectionStrategy,
    Component,
    Injector,
    Input,
} from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import {
    RadioGroupComponentDefinition,
    RadioGroupItem,
    RadioGroupState,
} from './radio-group';


@Component({
    selector: 'wc-radio-group',
    templateUrl: 'radio-group.component.html',
    styleUrls: ['radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(RadioGroupComponentDefinition)
export class RadioGroupComponent implements WebComponentHooks<RadioGroupState> {
    @Input() state!: RadioGroupState;

    constructor(
        readonly injector: Injector
    ) {}

    onChangeState() {
        if (!Array.isArray(this.state.items)) {
            this.state.items = [];
        }
        this.state.items.forEach((item, index) => {
            if (typeof item === 'string') {
                this.state.items[index] = {
                    content: item,
                }
            }
        });
    }

    trackBy(index: number, item: RadioGroupItem) {
        return item.content || index;
    }
}
