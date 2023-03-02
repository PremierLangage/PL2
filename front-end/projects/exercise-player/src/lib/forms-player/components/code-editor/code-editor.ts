import { FormSuperInterface } from "../../../models/exercise";

export interface CodeEditorForm extends FormSuperInterface {
    initialCode: string;
    height: number;
    tabSize: number;
    language: string;
    quickSuggestions: boolean;
}