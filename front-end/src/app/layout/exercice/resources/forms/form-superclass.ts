import { Component, Input } from "@angular/core";
import { formState } from "src/app/models/exercice";

@Component({
    selector: 'form-superclass',
    template: ''
})
export abstract class FormSuperclass {
    @Input() set formData(value: formState) {
        this.initData(value);
    }

    @Input() get output(): any { return this.output_} 
    set output(value: any) {
        this.output_ = value;
        console.log("Output Changed:" + JSON.stringify(this.output_));
    }
    output_: any;

    getOutput() {
        return this.output_;
    }

    abstract initData(value: formState) : void;
}
