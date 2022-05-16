import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CircleMember } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
    selector: 'app-circle-members-table',
    templateUrl: './members-table.component.html',
    styleUrls: ['./members-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersTableComponent implements OnChanges {
    @Input()
    members: PageResult<CircleMember> = { count: 0, results: [] };
    @Input()
    editable = false;

    @Output() didDelete = new EventEmitter<CircleMember>();
    @Output() didChangeParams = new EventEmitter<NzTableQueryParams>();

    total = 0;
    pageSize = 10;
    pageIndex = 1;
    loading = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.members) {
            this.total = this.members.count;
            this.loading = false;
        }
    }

    onQueryParamsChange(params: NzTableQueryParams): void {
        this.loading = true;
        this.didChangeParams.emit(params);
    }
}
