import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActivityModule } from "src/app/layout/activity/activity.module";
import { ExerciceModule } from "src/app/layout/exercice/exercice.module";
import { SharedLayoutModule } from "src/app/layout/layout.module";
import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { WorkspaceComponent } from "./workspace.component";


@NgModule({
    imports: [
        CommonModule,
        ExerciceModule,
        ActivityModule,
        WorkspaceRoutingModule,
    ],
    declarations: [
        WorkspaceComponent,
    ]
})
export class WorkspaceModule {}