import { CorrectionGrid, CorrectionGridElem } from "../activity";

export const cexActivityCorrectionGridElem1 : CorrectionGridElem = {
    label : "Exercice 1",
    noteInfo : {
        min : 0,
        max : 5,
        step:  0.5
    },
    comment : "Pour l'instant rien de bien méchant"
}

export const cexActivityCorrectionGridElem2 : CorrectionGridElem = {
    label : "Exercice 2",
    noteInfo : {
        min : 0,
        max : 7,
        step:  0.5
    },
    comment : "Pour l'instant rien de bien méchant"
}

export const cexActivityCorrectionGridElem3 : CorrectionGridElem = {
    label : "Exercice 3",
    noteInfo : {
        min : 0,
        max : 10,
        step:  0.5
    },
    comment : "Pour l'instant rien de bien méchant"
}
export const cexActivityCorrectionGrid : CorrectionGrid = {
    correction : [
        cexActivityCorrectionGridElem1,
        cexActivityCorrectionGridElem2,
        cexActivityCorrectionGridElem3,
    ],
    noteRange : {
        min: 0,
        max: 20
    }
}
