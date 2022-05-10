import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ResourceLoaderService } from '@mcisse/nge/services';
import { WebComponentDefinition } from '../web-component/web-component';

@Component({
    selector: 'wc-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
    @Input() definition!: WebComponentDefinition;

    showEditor = true;
    component?: any;

    constructor(
        private readonly el: ElementRef<HTMLElement>,
        private readonly resourceLoader: ResourceLoaderService,
    ) {}

    async ngOnInit() {
        this.resourceLoader.loadAllAsync([
            ['style', 'assets/vendors/jsoneditor/jsoneditor.min.css']
        ]).toPromise().catch();

        const host = this.el.nativeElement.firstElementChild;
        this.component = document.createElement(
            this.definition.selector
        ) as any;
        if (this.definition.showcase) {
            this.component.state = this.definition.showcase;
        }
        host?.appendChild(this.component);
    }

}
