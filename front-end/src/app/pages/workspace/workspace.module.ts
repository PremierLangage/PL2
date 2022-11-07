import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActivityModule } from "src/app/activityPlayer/activity/activity.module";
import { ExerciceModule } from "src/app/activityPlayer/exercice/exercice.module";
import { ActivityPlayerSharedLayoutModule } from "src/app/activityPlayer/activityPlayerLayout.module";
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