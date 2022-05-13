import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LayoutState, LayoutTab } from '../layout';

@Component({
    selector: 'app-container-tabbed',
    templateUrl: './container-tabbed.component.html',
    styleUrls: ['./container-tabbed.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerTabbedComponent {
    @Input()
    tabs: LayoutTab[] = [];

    @Input()
    state: LayoutState = 'READY';
}
