import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CircleFilters } from '@platon/feature/workspace';


@Component({
    selector: 'app-search-circle-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly form = new FormGroup({
        date: new FormControl(0),
        order: new FormControl('watchers'),
        visibility: new FormControl('all'),
    });

    @Input()
    user!: string;

    @Input()
    filter: CircleFilters = {};

    @Output()
    filterChange = new EventEmitter<CircleFilters>();

    constructor(
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.filter.opened = value.visibility === 'opened';
                this.filter.orderBy = value.order;
                this.filter.updatedAt = value.date;

                delete this.filter.watchers;
                if (value.visibility === 'watching') {
                    this.filter.watchers = [this.user];
                }

                delete this.filter.members;
                if (value.visibility === 'belonging') {
                    this.filter.members = [this.user];
                }

                this.filterChange.emit(this.filter);
            })
        );
        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                this.filter.search = e.q ?? this.filter.search;
                this.form.patchValue({
                    date: Number.parseInt(e.date, 10) || this.filter.updatedAt || 0,
                    order: e.order || this.filter.orderBy || 'watchers',
                    visibility: e.visibility ?? 'all',
                });
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
