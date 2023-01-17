import { FormSuperInterface } from "../../../models/exercise";

export interface RadioGroupItem {
    css?: string;
    content: string;
}

export interface RadioGroupForm extends FormSuperInterface {
    items: RadioGroupItem[];
    horizontal: boolean;
    statementHorizontal?: boolean;
}
