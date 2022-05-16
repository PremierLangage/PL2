import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LayoutState, LayoutTab } from '../layout';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
    @Input()
    tabs: LayoutTab[] = [];

    @Input()
    state: LayoutState = 'READY';
}
