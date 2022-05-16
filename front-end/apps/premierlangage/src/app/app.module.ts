// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// LIBS
import { CoreConfigModule } from '@platon/core/config';
import { SharedVendorsModule } from '@platon/shared/vendors';
import { FeatureWebComponentModule } from '@platon/feature/web-component';

// MODULE
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

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
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
