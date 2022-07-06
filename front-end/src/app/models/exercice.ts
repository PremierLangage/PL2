export interface exerciceFeedBack {
    score: number;
    feedback : string;
}

export interface exercice {
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
        titleSelector: string; 
        statementSelector: string;
        feedBackTextSelector:  string; 
        feedBackScoreSelector: string; 
    }
}