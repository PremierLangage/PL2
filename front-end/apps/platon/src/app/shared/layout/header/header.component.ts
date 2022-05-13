import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';
import { ThemeService } from '@platon/core/config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    @Input()
    drawerVisible = false;
    @Input()
    drawerEnabled = true;

    @Output()
    drawerVisibleChange = new EventEmitter<boolean>();

    @ViewChild('navigation')
    navigationTemplate!: TemplateRef<any>;

    user?: AuthUser;

    theme = this.themeService.themeChange;

    constructor(
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly themeService: ThemeService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.user = await this.authService.ready();
        this.changeDetectorRef.markForCheck();
    }

    signOut(): void {
        this.authService.signOut();
    }

    switchTheme(): void {
        this.themeService.switchTheme();
    }

}
