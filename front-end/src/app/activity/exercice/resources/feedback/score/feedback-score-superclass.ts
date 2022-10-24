import { Component, Input } from "@angular/core";
import { exerciceFeedBack } from "../../../models/exercice";

@Component({
    selector: 'title-superclass',
    template: ''
})
export class FeedBackScoreSuperClass {
    @Input() feedback?: exerciceFeedBack;
}
