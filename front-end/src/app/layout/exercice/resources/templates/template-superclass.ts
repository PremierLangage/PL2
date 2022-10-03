import { Component, EventEmitter, Input, Output } from "@angular/core";
import { exercice, exerciceFeedBack } from "../../models/exercice";

@Component({
    template: ''
})
export class TemplateSuperclass {
    @Input() exercice?: exercice;
    @Output() exerciceChange =  new EventEmitter<exercice>();
    @Input() feedback?: exerciceFeedBack;
}
