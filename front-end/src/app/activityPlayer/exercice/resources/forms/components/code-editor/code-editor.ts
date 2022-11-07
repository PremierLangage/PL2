import { formSuperClassInterface } from "../../form-superclass";

export interface CodeEditorForm extends formSuperClassInterface{
    initialCode: string;
    height: number;
    tabSize: number;
    language: string;
    quickSuggestions: boolean;
}