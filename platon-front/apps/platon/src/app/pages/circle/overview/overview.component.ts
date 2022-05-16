import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CircleEvent, ResourceStatus } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { CirclePresenter } from '../circle.presenter';

@Component({
    selector: 'app-circle-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly status: ResourceStatus[] = [
        'DRAFT',
        'READY',
        'BUGGED',
        'NOT_TESTED',
        'DEPRECATED',
    ];

    events: PageResult<CircleEvent> = { count: 0, results: [] };
    context = this.presenter.defaultContext;

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                if (this.context.circle) {
                    this.events = await this.presenter.listEvents();
                }
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
