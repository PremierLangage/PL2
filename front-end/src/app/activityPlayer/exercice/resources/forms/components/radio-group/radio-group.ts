import { formSuperClassInterface } from "../../form-superclass";

export interface RadioGroupItem {
    css?: string;
    content: string;
}

export interface RadioGroupForm extends formSuperClassInterface {
    items: RadioGroupItem[];
    horizontal: boolean;
}
