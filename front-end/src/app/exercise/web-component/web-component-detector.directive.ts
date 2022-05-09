import { Directive, OnDestroy, OnInit } from '@angular/core';
import { ComponentLoaderService } from '@juristr/ngx-lazy-el';

/**
 * Dynamically detect and lazy load web components in the dom.
 */
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'wc-detector, [wc-detector]',
})
export class WebComponentDetectorDirective implements OnInit, OnDestroy {
    private observer?: MutationObserver;
    private listener?: () => void;

    constructor(private readonly componentLoader: ComponentLoaderService) {}

    ngOnInit() {
        this.lazyLoadWebComponents();
        this.observeWebComponents();
    }

    ngOnDestroy() {
        this.observer?.disconnect();
        if (this.listener) {
            this.listener();
        }
    }

    /**
     * Detect the web components during the initial load of the page and lazy load them.
     * @returns A promise that resolves with a list of the remaining unloaded element selectors
     */
    private lazyLoadWebComponents() {
        const listener = () => {
            setTimeout(async () => {
                let unloadedTags = Array.from(
                    this.componentLoader.getComponentsToLoad()
                );
                for (const tagName of unloadedTags) {
                    const tags = document.getElementsByTagName(tagName);
                    if (tags?.length) {
                        await this.componentLoader.loadComponent(tagName);
                        unloadedTags = unloadedTags.filter(
                            (e) => e !== tagName
                        );
                    }
                }
            });
        };
        document.addEventListener('DOMContentLoaded', listener);
        this.listener = () => {
            document.removeEventListener('DOMContentLoaded', listener);
        };
    }

    /**
     * Detect the web components insertion in the dom using MutationObserver API.
     * Each time a web component is inserted to the dom, this method will load the bundle associated
     * to the web component if it's the first time.
     */
    private observeWebComponents(): void {
        const target = document.body;
        let unloadedTags = Array.from(
            this.componentLoader.getComponentsToLoad()
        );
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLElement) {
                        unloadedTags = this.checkWebcomponentInNode(
                            node,
                            unloadedTags
                        );
                    }
                });
            });
        });
        this.observer.observe(target, {
            subtree: true,
            childList: true,
        });
    }

    private checkWebcomponentInNode(node: HTMLElement, unloadedTags: string[]) {
        if (!unloadedTags.length) {
            return unloadedTags;
        }

        const tagName = node.tagName.toLowerCase();
        if (unloadedTags.includes(tagName)) {
            unloadedTags = unloadedTags.filter((e) => e !== tagName);
            this.componentLoader.loadComponent(tagName).catch(console.error);
        }

        for (const child of Array.from(node.childNodes)) {
            if (child instanceof HTMLElement) {
                unloadedTags = this.checkWebcomponentInNode(
                    child,
                    unloadedTags
                );
            }
        }
        return unloadedTags;
    }
}
