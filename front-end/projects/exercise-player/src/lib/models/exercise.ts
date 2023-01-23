import { InputBoxForm } from "../forms-player/components/input-box/input-box";
import { RadioGroupForm } from "../forms-player/components/radio-group/radio-group";

export type markdownString = string;

export interface FormSuperInterface {
    disabled: boolean;
    statement?: string;
}

export interface formState {
    selector: string;
    form: RadioGroupForm | InputBoxForm | FormSuperInterface;
    output?: any;
}

export interface Exercise {
    id : string,
    title: string,
    author: string,
    version: string,
    statement : markdownString,
    formArray : Array<formState>;

    displayData : {
        templateSelector: string;
    }
    tags : Array<string>;
}