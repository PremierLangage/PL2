import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActivityModule } from "src/app/activity/activity/activity.module";
import { ExerciceModule } from "src/app/activity/exercice/exercice.module";
import { ActivitySharedLayoutModule } from "src/app/activity/activityLayout.module";
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