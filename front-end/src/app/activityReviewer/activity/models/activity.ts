export interface ActivityReviewer {
    statement : string;

}

export interface ActivityAnswer {
    temp : string;
}

export interface Correction {
    answer :ActivityAnswer;
    grid:  CorrectionGrid;
}

export interface CorrectionGrid {
    correction: CorrectionGridElem[];
    noteRange : DoubleRange;
}

export interface CorrectionGridElem {
    label : string;
    note ?: any;
    noteInfo: {
        min : number;
        max : number;
        step ?: number;
    };
    comment?: string;
}
