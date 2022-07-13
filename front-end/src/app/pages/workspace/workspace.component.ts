import { Component } from "@angular/core";
import { cexExercice } from "src/app/models/constUsed/constUsed";

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html',
    styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
    exampleExercice = cexExercice;

}