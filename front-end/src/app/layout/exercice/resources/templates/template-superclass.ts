import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input, ViewChild } from "@angular/core";
import { exercice, exerciceFeedBack } from "src/app/models/exercice";
import { FormsProviderComponent } from "../forms/forms-provider/forms-provider.component";

@Component({
    selector: 'statement-superclass',
    template: ''
})
export class TemplateSuperclass {
    @Input() exercice?: exercice;
    @Input() feedback?: exerciceFeedBack;
}
