import { Location } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@platon/core/auth';
import { Circle, CircleService, ResourceService, ResourceTypes } from '@platon/feature/workspace';
import { zoomInOnEnterAnimation } from 'angular-animations';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-create-resource',
    templateUrl: './create-resource.component.html',
    styleUrls: ['./create-resource.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    // tslint:disable-next-line: no-host-metadata-property
    host: {
        '[@zoomInOnEnter]': 'true',
    },
    animations: [zoomInOnEnterAnimation({ duration: 300 })],
})
export class CreateResourceComponent implements OnInit {
    circles: Circle[] = [];
    types: ResourceTypes[] = ['MODEL', 'EXERCISE', 'ACTIVITY'];

    selectedCircle?: Circle;
    selectedTopics: string[] = [];
    selectedLevels: string[] = [];
    selectedType: ResourceTypes = 'MODEL';

    loading = true;
    creating = false;

    formInfos = new FormGroup({
        name: new FormControl('', [Validators.required]),
        desc: new FormControl('', [Validators.required])
    });

    get topics(): string[] {
        return this.selectedCircle?.topics || [];
    }

    get levels(): string[] {
        return this.selectedCircle?.levels || [];
    }

    constructor(
        private readonly router: Router,
        private readonly location: Location,
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,
        private readonly resourceService: ResourceService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    async ngOnInit() {
        this.loading = true;

        const user = (await this.authService.ready())!;

        this.circles = (
            await this.circleService.findWatchedBy(user.username, 100).toPromise()
        ).results;

        const { queryParamMap } = this.activatedRoute.snapshot;
        const circleId = Number.parseInt(queryParamMap.get('circle') || '-1', 10);
        this.selectedCircle = this.circles.find(e => e.id === circleId);

        this.loading = false;
        this.changeDetectorRef.markForCheck();
    }

    dismiss(): void {
        this.location.back();
    }

    async onSubmit() {
        try {
            const { name, desc } = this.formInfos.value;
            this.creating = true;
            const resource = await this.resourceService.createResource({
                name,
                desc,
                type: this.selectedType,
                circle: this.selectedCircle!.id,
                levels: this.selectedLevels,
                topics: this.selectedTopics,
                files: {
                    'resource-info.json': {
                        type: 'file',
                        content: JSON.stringify({
                            type: this.selectedType,
                        }, null, 4)
                    }
                }
            }).toPromise();

            this.router.navigate(['/resource', resource.id], {
                relativeTo: this.activatedRoute,
                replaceUrl: true
            });
        } catch (error) {
            console.error(error);
            this.messageService.error(
                'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !'
            );
            this.creating = false;
            this.changeDetectorRef.markForCheck();
        }
    }

    trackByValue(_: number, item: any) {
        return item;
    }
}
