import { InputBoxForm } from "../resources/forms/components/input-box/input-box";
import { RadioGroupForm } from "..//resources/forms/components/radio-group/radio-group";

export interface exerciceFeedBack {
    score: number;
    feedback : string;
}

export interface exerciceFeedBackPacket {
    flag: boolean;
    feedbacek?: exerciceFeedBack;
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
        feedback: {
            feedBackTextSelector:  string; 
            feedBackScoreSelector: string; 
        }
    }
}

export interface titleProperties {
    titlePlacement?: "left" | "center" | "right";
}

export interface formState {
    selector: 'radioGroup' | 'inputBox';
    form: RadioGroupForm | InputBoxForm;
    output?: any;
}



