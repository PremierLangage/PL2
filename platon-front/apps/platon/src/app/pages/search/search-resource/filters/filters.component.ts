import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResourceFilters } from '@platon/feature/workspace';



@Component({
    selector: 'app-search-resource-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly form = new FormGroup({
        date: new FormControl(0),
        order: new FormControl('name'),
        status: new FormControl('all'),
        models: new FormControl(false),
        exercises: new FormControl(false),
        activities: new FormControl(false),
        visibility: new FormControl('all'),
    });

    @Input()
    user!: string;

    @Input()
    filter: ResourceFilters = {};

    @Output()
    filterChange = new EventEmitter<ResourceFilters>();

    constructor(
        private readonly activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.form.valueChanges.subscribe(value => {
                this.filter.orderBy = value.order;
                this.filter.updatedAt = value.date;

                delete this.filter.status;
                if (value.status && value.status !== 'all') {
                    this.filter.status = value.status.toUpperCase();
                }

                delete this.filter.authors;
                if (value.visibility === 'authored') {
                    this.filter.authors = [this.user];
                }

                this.filter.types = [];
                if (value.models) {
                    this.filter.types.push('MODEL');
                }

                if (value.exercises) {
                    this.filter.types.push('EXERCISE');
                }

                if (value.activities) {
                    this.filter.types.push('ACTIVITY');
                }

                this.filterChange.emit(this.filter);
            })
        );

        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                this.filter.search = e.q ?? this.filter.search;

                const types = e.types || '';
                this.form.patchValue({
                    date: Number.parseInt(e.date, 10) || this.filter.updatedAt || 0,
                    order: e.order || this.filter.orderBy || 'name',
                    status: e.status ?? 'all',
                    visibility: e.visibility ?? 'all',
                    models: types.includes('model'),
                    exercises: types.includes('exercise'),
                    activities: types.includes('activity'),
                });
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

}
