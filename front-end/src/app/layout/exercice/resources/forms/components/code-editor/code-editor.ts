import { formSuperClassInterface } from "../../form-superclass";

export interface CodeEditorForm extends formSuperClassInterface{
    code: string;
    height: number;
    tabSize: number;
    language: string;
    quickSuggestions: boolean;
}