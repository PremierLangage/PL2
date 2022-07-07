import { Component, Input } from "@angular/core";

@Component({
    selector: 'title-superclass',
    template: ''
})
export class TitleSuperClass {
    @Input() title?:    string;
    @Input() version?:  string;
    @Input() author?:   string;
}
