import { Component, Input } from "@angular/core";
import { formState } from "../models/exercise";

@Component({
    selector: 'form-superclass',
    template: ''
})
export abstract class FormSuperclass {
    @Input() get formData(): formState { return this.formData_; }
    set formData(value: formState) {
        this.formData_ = value;
        this.initData(value);
        console.log(value.form.disabled);
        
    }

    @Input() get output(): any { return this.output_} 
    set output(value: any) {
        this.output_ = value;
        this.formData_.output = this.output_;
    }

    
    output_: any;
    formData_!: formState;

    getOutput() {
        return this.output_;
    }

    abstract initData(value: formState) : void;
}
