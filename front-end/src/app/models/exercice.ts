export interface exerciceFeedBack {
    score: number;
    feedback : string;
}

export interface exercice {
    cid: string;
    author: string;
    version: string;

    process: { // form
        title: string;
        statement: string;
        formState :             // strongly typed
            object; // yet to be defined 
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

