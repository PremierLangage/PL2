import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CircleInvitation } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
    selector: 'app-circle-invitations-table',
    templateUrl: './invitations-table.component.html',
    styleUrls: ['./invitations-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvitationsTableComponent implements OnChanges {
    @Input()
    invitations: PageResult<CircleInvitation> = { count: 0, results: [] };
    @Input()
    editable = false;

    @Output() didDelete = new EventEmitter<CircleInvitation>();
    @Output() didChangeParams = new EventEmitter<NzTableQueryParams>();

    total = 0;
    pageSize = 10;
    pageIndex = 1;
    loading = true;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.invitations) {
            this.total = this.invitations.count;
            this.loading = false;
        }
    }

    onQueryParamsChange(params: NzTableQueryParams): void {
        this.loading = true;
        this.didChangeParams.emit(params);
    }
}
