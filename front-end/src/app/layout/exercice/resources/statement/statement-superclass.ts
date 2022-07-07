import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'statement-superclass',
    template: ''
})
export class StatementSuperclass {
    @Input() statement?: string;
}
