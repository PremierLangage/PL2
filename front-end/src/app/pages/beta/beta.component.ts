import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { cexExercice } from "src/app/activityPlayer/exercice/models/constUsed/constUsed";


@Component({
    selector: 'beta-component',
    templateUrl: './beta.component.html',
    styleUrls: ['./beta.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetaComponent implements OnInit, OnDestroy {

    private readonly subscriptions: Subscription[] = [];

    private uri!: string;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {

    }
    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(data => {
                this.uri = data['uri'];
                this.changeDetectorRef.markForCheck();
            })
        )
    }


    exercice = cexExercice;
}