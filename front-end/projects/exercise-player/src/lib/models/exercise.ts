import { CodeEditorForm } from "../forms-player/components/code-editor/code-editor";
import { FormlyForm } from "../forms-player/components/formlyform/formlyform";
import { InputBoxForm } from "../forms-player/components/input-box/input-box";
import { MathLiveForm } from "../forms-player/components/math-live/math-live";
import { RadioGroupForm } from "../forms-player/components/radio-group/radio-group";

export type markdownString = string;

export interface FormSuperInterface {
    disabled: boolean;
    statement?: string;
}

export interface formState {
    selector: string;
    form: RadioGroupForm | InputBoxForm | CodeEditorForm | FormlyForm | MathLiveForm | FormSuperInterface;
    output?: any;
};


export interface OldExercise {
    id : string,
    title: string,
    author: string,
    version: string,
    statement : markdownString,
    formState : formState;

    displayData : {
        templateSelector: string;
    }
    tags : Array<string>;
};

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
};

export interface InnerActivities {
    inner : Array<NewExercise>,
    header : Array<NewExercise>,
    left : Array<NewExercise>,
    footer : Array<NewExercise>,
    right : Array<NewExercise>
};

export interface NewExercise {
    id : string,
    title: string,
    author: string,
    version: string,
    statement : markdownString,
    formArray : Array<formState>,
    innerActivities : InnerActivities;

    displayData : {
        displayHeader : boolean,
        templateSelector: string
    }
    tags : Array<string>,
};