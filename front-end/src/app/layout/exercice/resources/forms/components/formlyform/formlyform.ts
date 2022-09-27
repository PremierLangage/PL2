import { FormlyFieldConfig } from "@ngx-formly/core";
import { formSuperClassInterface } from "../../form-superclass";

export interface FormlyForm extends formSuperClassInterface {
    fields : FormlyFieldConfig[];
    output: any
}