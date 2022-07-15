import { formSuperClassInterface } from "../../form-superclass";

export interface InputBoxForm extends formSuperClassInterface {
    type: 'number' | 'text' | 'textarea';
    hint?: string;
    placeholder: string;
    numberProperties?: numberProperties;
    textProperties?: textProperties;
    textareaProperties?: textareaProperties;
}

export interface numberProperties {
    min?: number;
    max?: number;
    step?: number;
    unitPrefix?: string;
    unitSuffix?: string;
}

export interface textProperties {
    maxChar?: number;
    completionText?: string[];
}

export interface textareaProperties {
    minLine?: number;
    maxLine?: number;
    maxChar?: number;
    completionText?: string[];
}