import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Exercise } from './exercise.service';
import { WebComponentService } from './web-component/web-component.service';

@Pipe({
    name: 'component',
})
export class ExercisePipe implements PipeTransform {
    constructor(
        private eRef: ElementRef,
        readonly webService: WebComponentService,
        private sanitize: DomSanitizer
    ) {}

    transform(platon: Exercise) {
        return (
            `<${platon.selector} state='` +
            JSON.stringify(platon.state) +
            `'></${platon.selector}>`
        );
    }
}