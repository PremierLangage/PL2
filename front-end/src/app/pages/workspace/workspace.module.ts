import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedLayoutModule } from "src/app/layout/layout.module";
import { WorkspaceRoutingModule } from "./workspace-routing.module";
import { WorkspaceComponent } from "./workspace.component";


@NgModule({
    imports: [
        CommonModule,
        SharedLayoutModule,
        WorkspaceRoutingModule,
    ],
    declarations: [
        WorkspaceComponent,
    ]
})
export class WorkspaceModule {}