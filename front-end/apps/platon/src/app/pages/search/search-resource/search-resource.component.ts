import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { ResourceService, Resource, ResourceFilters, ResourceCompletion } from '@platon/feature/workspace';
import { SearchBar } from '@platon/shared/ui/search';
import { PageResult } from '@platon/shared/utils';
import Fuse from 'fuse.js';
import { lastValueFrom, of, Subscription } from 'rxjs';

@Component({
    selector: 'app-search-resource',
    templateUrl: './search-resource.component.html',
    styleUrls: ['./search-resource.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResourceComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    user?: AuthUser;
    filter: ResourceFilters = {};
    page: PageResult<Resource> = {
        count: 0,
        results: []
    };
    completion: ResourceCompletion = {
        names: [],
        topics: [],
        levels: []
    };

    searching = true;
    initialRequest = true;

    readonly searchBar: SearchBar<string> = {
        placeholder: 'Essayez un nom, un topic, un niveau...',
        filterer: {
            run: (query) => {
                const suggestions = new Set<string>([
                    ...this.completion.names,
                    ...this.completion.topics,
                    ...this.completion.levels,
                ]);
                return of(new Fuse(Array.from(suggestions), {
                    includeMatches: true,
                    findAllMatches: false,
                    threshold: 0.2,
                }).search(query).map(e => e.item));
            },
        },
        onSearch: this.search.bind(this),
    };

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    async ngOnInit(): Promise<void> {
        const [user, completion] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.resourceService.completion())
        ]);

        this.user = user;
        this.completion = completion;

        const { url } = this.router;
        const matches = url.match(/\/circle\/(\d+).+/);
        if (matches) {
            this.filter.circle = Number.parseInt(matches[1], 10);
        }
        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    async search(query?: string) {
        this.filter.search = query;

        const queryParams: Params = {
            q: this.filter.search,
            date: this.filter.updatedAt,
            order: this.filter.orderBy,
            status: this.filter.status,
            visibility: 'all',
            types: (this.filter.types || []).map(e => e.toLowerCase()).join('|'),
        };

        if (this.filter.authors) {
            queryParams['visibility'] = 'authored';
        }

        this.router.navigate([], {
            queryParams,
            relativeTo: this.activatedRoute,
            queryParamsHandling: 'merge',
        });

        this.searching = true;
        this.page = await lastValueFrom(this.resourceService.search(this.filter));
        this.searching = false;

        this.changeDetectorRef.markForCheck();
    }

    onTapTag(tag: string) {
        this.searchBar.value = tag;
    }

    onChangeFilter(filter: ResourceFilters) {
        if (this.initialRequest || this.searchBar.value !== filter.search) {
            this.initialRequest = false;
            this.searchBar.value = filter.search; // will trigger search()
        }
    }
}
