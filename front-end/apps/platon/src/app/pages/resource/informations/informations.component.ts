import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-informations',
    templateUrl: './informations.component.html',
    styleUrls: ['./informations.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationsComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    topics: string[] = [];
    levels: string[] = [];

    form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required]),
        topics: new FormControl([]),
        levels: new FormControl([]),
    });

    saving = false;
    context = this.presenter.defaultContext;

    get canEdit(): boolean {
        return !!this.context.user?.isAdmin;
    }

    get canSubmit(): boolean {
        return this.form.valid && !!this.context.user?.isAdmin;
    }

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                const { circle, resource } = context;
                if (circle && resource) {
                    this.levels = circle.levels;
                    this.topics = circle.topics;
                    this.form = new FormGroup({
                        name: new FormControl({ value: resource.name, disabled: !this.canEdit }, [Validators.required]),
                        desc: new FormControl({ value: resource.desc, disabled: !this.canEdit }, [Validators.required]),
                        topics: new FormControl(resource.topics),
                        levels: new FormControl(resource.levels),
                    });
                }

                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async saveChanges() {
        try {
            this.saving = true;
            await this.presenter.update(this.form.value);
        } finally {
            this.saving = false;
            this.changeDetectorRef.markForCheck();
        }
    }

    trackByValue(_: number, item: any) {
        return item;
    }
}
