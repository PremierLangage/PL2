import { InputBoxForm } from "../resources/forms/components/input-box/input-box";
import { RadioGroupForm } from "..//resources/forms/components/radio-group/radio-group";
import { CodeEditorForm } from "../resources/forms/components/code-editor/code-editor";

export interface exerciceFeedBack {
    score: number;
    feedback : string;
    form?: formState;
}

export interface exerciceFeedBackPacket {
    gotFeedback: boolean;
    feedback?: exerciceFeedBack;
    syntaxError?: boolean;
}

export interface exercice {
    cid: string;
    author: string;
    version: string;

    process: { // form
        title: string;
        statement: string;
        formState : formState;     // strongly typed
    }

    templates : {
        templateSelector: string;
        titleProperties: titleProperties; 
        feedBackScoreSelector: string; 
    }
}

export interface titleProperties {
    titlePlacement?: "left" | "center" | "right";
}

export interface formState {
    selector: 'radioGroup' | 'inputBox' | 'codeEditor';
    form: RadioGroupForm | InputBoxForm | CodeEditorForm;
    output?: any;
}



