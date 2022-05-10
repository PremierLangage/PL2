import { ElementRef, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Exercise } from '../../exercise/exercise.service';
import { WebComponentService } from '../../exercise/web-component/web-component.service';

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
        /*
        const component = this.webService.findBySelector(platon.selector);
        if (component === undefined) {
            return null;
        }
        return component;
        */
        console.log(`<${platon.selector}></${platon.selector}>`);
        return this.sanitize.bypassSecurityTrustHtml(
            `<${platon.selector}></${platon.selector}>`
        );
    }
}
