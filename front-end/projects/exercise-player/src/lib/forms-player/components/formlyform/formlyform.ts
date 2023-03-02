import { FormlyFieldConfig } from "@ngx-formly/core";
import { FormSuperInterface } from "../../../models/exercise";

export interface FormlyForm extends FormSuperInterface {
    fields : FormlyFieldConfig[];
}