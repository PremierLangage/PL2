import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CircleService, CircleTree } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-create-circle',
    templateUrl: './create-circle.component.html',
    styleUrls: ['./create-circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateCircleComponent implements OnInit {
    status: string[] = ['process', 'wait', 'wait', 'wait'];

    tree?: CircleTree;
    parent?: number;

    topics: string[] = [];
    levels: string[] = [];

    selectedTopics: string[] = [];
    selectedLevels: string[] = [];

    loading = true;
    creating = false;

    formInfos = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required]),
        opened: new FormControl(false, [Validators.required]),
    });

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    async ngOnInit() {
        const [tree, topics, levels] = await Promise.all([
            lastValueFrom(this.circleService.tree()),
            lastValueFrom(this.circleService.topics()),
            lastValueFrom(this.circleService.levels()),
        ]);

        this.tree = tree;
        this.topics = topics?.map(e => e.name) || [];
        this.levels = levels;
        this.loading = false;

        this.changeDetectorRef.markForCheck();
    }

    dismiss(): void {
        this.location.back();
    }

    async onSubmit() {
        try {
            const { name, desc, opened } = this.formInfos.value;
            this.creating = true;
            const circle = await lastValueFrom(this.circleService.createCircle({
                name,
                desc,
                opened,
                levels: this.selectedLevels,
                topics: this.selectedTopics,
                parent: this.parent!
            }));
            this.router.navigate(['/circle', circle.id], {
                relativeTo: this.activatedRoute,
                replaceUrl: true
            });
        } catch {
            this.messageService.error(
                'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !'
            );
            this.creating = false;
            this.changeDetectorRef.markForCheck();
        }
    }

    trackByValue(_: number, value: any) {
        return value;
    }
}
