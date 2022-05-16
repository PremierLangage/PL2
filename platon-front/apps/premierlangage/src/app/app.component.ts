import { Attribute, Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from '@platon/core/config';
import { NzIconService } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    noRouting = false;

    constructor(
        private readonly elementRef: ElementRef<HTMLElement>,
        private readonly themeService: ThemeService,
        private readonly nzIconService: NzIconService
    ) {}

    ngOnInit() {
        this.themeService.loadTheme().catch(console.error);
        this.nzIconService.changeAssetsSource('assets/vendors/@ant-design');

        if (this.elementRef.nativeElement.hasAttribute('no-routing')) {
            this.noRouting = true;
        }
    }
}
