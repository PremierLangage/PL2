import { Directive, ElementRef, Input, NgModule, OnChanges, OnInit } from '@angular/core';
import { ResourceLoaderService } from '@mcisse/nge/services';
import { graphviz } from 'd3-graphviz';
import { take } from 'rxjs/operators';

// https://github.com/magjac/d3-graphviz/tree/v2.6.1

@Directive({
    // tslint:disable-next-line: directive-selector
  selector: '[renderDot]'
})
export class RenderDotDirective implements OnInit, OnChanges {
    private ready = false;

    @Input('renderDot')
    dot?: string;

    constructor(
        private el: ElementRef,
        private readonly resourceLoader: ResourceLoaderService
    ) {}

    ngOnInit() {
        this.resourceLoader.loadAllSync([
            // http://www.xavierdupre.fr/js/vizjs/viz-lite.js
            ['script', 'assets/vendors/viz/viz.js']
        ]).pipe(take(1)).subscribe(() => {
            this.ready = true;
            this.render();
        });
    }

    ngOnChanges() {
        if (this.ready) {
            this.render();
        }
    }

    private render() {
        if (this.el && this.dot) {
            const viz = graphviz(this.el.nativeElement, {
                zoom: false,
                fit: true,
                useWorker: false
            });
            viz.renderDot(this.dot || '');
        }
    }
}

@NgModule({
    exports: [RenderDotDirective],
    declarations: [RenderDotDirective],
})
export class RenderDotModule { }
