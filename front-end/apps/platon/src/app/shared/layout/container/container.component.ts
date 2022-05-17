import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, OnDestroy, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Subscription } from 'rxjs';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent implements OnInit, OnDestroy, AfterContentInit {
    private readonly subscriptions: Subscription[] = [];
    @ContentChild(DrawerComponent) drawer?: DrawerComponent;

    user?: AuthUser;

    drawerEnabled = true;
    drawerVisible = true;

    constructor(
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly breakpointObserver: BreakpointObserver,
    ) { }

    async ngOnInit() {
        this.user = await this.authService.ready();
        this.subscriptions.push(this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small
        ]).subscribe(result => {
            const { breakpoints } = result;
            const isSmallScreen = breakpoints[Breakpoints.XSmall] || breakpoints[Breakpoints.Small];
            this.drawerEnabled = isSmallScreen;
            this.changeDetectorRef.markForCheck();
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    ngAfterContentInit() {
        this.drawerVisible = this.drawer != null;
    }
}
