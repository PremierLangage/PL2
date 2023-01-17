import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExerciceModule } from "src/app/activityPlayer/exercice/exercice.module";
import { BetaComponent } from "./beta.component";


@NgModule({
    declarations: [
        BetaComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: ':uri',
                component: BetaComponent
            }
        ]),
        ExerciceModule
    ],
    exports: [
        RouterModule
    ]
})
export class BetaModule { }