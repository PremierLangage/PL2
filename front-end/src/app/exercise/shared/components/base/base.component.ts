import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { WebComponentDefinition } from 'src/app/exercise/web-component/web-component';
import { WebComponentService } from '../../../web-component/web-component.service';


@Component({
    selector: 'wc-base',
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit, OnDestroy {
    @ViewChild('container') container!: ElementRef;

    @Input() state: any;
    @Output() stateChange = new EventEmitter<any>();

    private observer?: MutationObserver;
    private definition?: WebComponentDefinition;

    constructor(
        private readonly api: WebComponentService,
        private readonly elementRef: ElementRef,
    ) {}

    ngOnInit() {
        const native: HTMLElement = this.elementRef.nativeElement;
        const selector = native.parentElement?.tagName.toLowerCase();
        this.definition = this.api.findBySelector(selector || '');
        this.observer = new MutationObserver(mutations => {
            mutations.forEach(this.createStateFromAttributes.bind(this))
        });
        this.observer.observe(native.parentElement as HTMLElement, {
            attributes: true
        });
        this.createStateFromAttributes();
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }

    private parse(text: string) {
        if (text.trim().match(/^(true|false|\d+|\[|\{)/)) {
            return JSON.parse(text);
        } else {
            return text;
        }
    }

    private createStateFromAttributes() {
        const native: HTMLElement = this.elementRef.nativeElement;
        const parent = native.parentElement as HTMLElement;
        const attributes = parent.attributes;
        const state: Record<string, any> = {};
        const properties = this.definition?.schema?.properties || {};
        let changed = false;
        for (const attribute of Array.from(attributes)) {
            if (attribute.name in properties) {
                changed = true;
                state[attribute.name] = this.parse(attribute.value);
            }
        }
        if (changed) {
            this.stateChange.emit(state);
        }
    }

}
