// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { AUTH_PROVIDERS } from '@platon/core/auth';
import { WORKSPACE_PROVIDERS } from '@platon/feature/workspace';

import { CoreConfigModule } from '@platon/core/config';
import { SharedVendorsModule } from '@platon/shared/vendors';
import { FeatureWebComponentModule } from '@platon/feature/web-component';

// MODULE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CoreConfigModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedVendorsModule,
        FeatureWebComponentModule,
    ],
    providers: [
        ...AUTH_PROVIDERS,
        ...WORKSPACE_PROVIDERS
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
