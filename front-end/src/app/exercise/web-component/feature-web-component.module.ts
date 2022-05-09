// ANGULAR
import { NgModule } from '@angular/core';

// MODULE
import { WEB_COMPONENTS_BUNDLES, WEB_COMPONENTS_REGISTRY } from './web-component-registry';
import { WebComponentDetectorDirective } from './web-component-detector.directive';
import { NgxLazyElModule } from '@juristr/ngx-lazy-el';

@NgModule({
    declarations: [
        WebComponentDetectorDirective,
    ],
    imports: [
        NgxLazyElModule.forRoot(WEB_COMPONENTS_BUNDLES)
    ],
    exports: [
        WebComponentDetectorDirective,
    ],
    providers: [WEB_COMPONENTS_REGISTRY]
})
export class FeatureWebComponentModule {}
