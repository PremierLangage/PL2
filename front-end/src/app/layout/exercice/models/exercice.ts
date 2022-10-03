import { ProviderExerciceTemplateKeys } from "./providers/exerciceTemplate";
import { ProviderFeedbackScoreKeys } from "./providers/feedbackScore";
import { ProviderFormKeys, ProviderFormTypes } from "./providers/form";

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
        templateSelector: ProviderExerciceTemplateKeys;
        titleProperties: titleProperties; 
        feedBackScoreSelector: ProviderFeedbackScoreKeys; 
    }
}

export interface titleProperties {
    titlePlacement?: "left" | "center" | "right";
}

export interface formState {
    selector: ProviderFormKeys;
    form: ProviderFormTypes;
    output?: any;
}



