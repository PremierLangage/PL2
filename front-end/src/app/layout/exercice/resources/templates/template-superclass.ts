import { Component, Input } from "@angular/core";
import { exercice, exerciceFeedBack } from "../../models/exercice";

@Component({
    template: ''
})
export class TemplateSuperclass {
    @Input() exercice?: exercice;
    @Input() feedback?: exerciceFeedBack;
}
