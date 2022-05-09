import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatTooltipModule } from '@angular/material/tooltip';

import { BaseModule } from '../../shared/components/base/base.module';
import { CssPipeModule } from '../../shared/pipes/css.pipe';

import { MatrixComponent } from './matrix.component';
import { MatrixResizerComponent } from './matrix-resizer/matrix-resizer.component';

@NgModule({
    declarations: [MatrixComponent, MatrixResizerComponent],
    imports: [
        BaseModule,
        CssPipeModule,
        FormsModule,
        OverlayModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    exports: [MatrixComponent],
})
export class MatrixModule {
    customElementComponent: Type<any> = MatrixComponent;
}
