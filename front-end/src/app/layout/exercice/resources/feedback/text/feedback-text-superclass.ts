import { Component, Input } from "@angular/core";
import { exerciceFeedBack } from "src/app/models/exercice";

@Component({
    selector: 'title-superclass',
    template: ''
})
export class FeedBackTextSuperClass {
    @Input() feedback?: exerciceFeedBack;
}
