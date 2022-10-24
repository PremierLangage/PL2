import { exercice, exerciceFeedBack } from "../exercice";
import { cexFormStateFormly, cexFormStateInputBoxNumber, cexFormStateInputBoxTextArea, cexFormStateRadioGroup, cexFormStateUsed } from "./ConstUsedforms";

export const cexExercice : exercice = {
    cid: "DefaultComponentIdentifier",
    author: "PlatonShowcase",
    version: "0.42",
    templates: {
        templateSelector: "default",
        titleProperties: {
            titlePlacement: "center"
        },
        feedBackScoreSelector: "default"

    },
    process: {
        title: "Example Title Showcase",
        statement: "## Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        formState: cexFormStateUsed
    }
}

export const cexExerciceFirst : exercice = {
    cid: "DefaultComponentIdentifier",
    author: "PlatonShowcase",
    version: "0.42",
    templates: {
        templateSelector: "default",
        titleProperties: {
            titlePlacement: "center"
        },
        feedBackScoreSelector: "default"
    },
    process: {
        title: "Exercice First",
        statement: "## Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        formState: cexFormStateInputBoxTextArea
    }
}


export const cexExerciceSecond : exercice = {
    cid: "DefaultComponentIdentifier",
    author: "PlatonShowcase",
    version: "4.2",
    templates: {
        templateSelector: "default",
        titleProperties: {
            titlePlacement: "left"
        },
        feedBackScoreSelector: "default"

    },
    process: {
        title: "Exercice Second",
        statement: "## Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        formState: cexFormStateRadioGroup
    }
}

export const cexExerciceThird : exercice = {
    cid: "DefaultComponentIdentifier",
    author: "PlatonShowcase",
    version: "4.2",
    templates: {
        templateSelector: "default",
        titleProperties: {
            titlePlacement: "center"
        },
        feedBackScoreSelector: "default"

    },
    process: {
        title: "Exercice Third",
        statement: "## Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        formState: cexFormStateInputBoxNumber
    }
}

export const cexExerciceFourth : exercice = {
    cid: "DefaultComponentIdentifier",
    author: "PlatonShowcase",
    version: "4.2",
    templates: {
        templateSelector: "default",
        titleProperties: {
            titlePlacement: "center"
        },
        feedBackScoreSelector: "default"

    },
    process: {
        title: "Exercice Fourth | editor",
        statement: "## Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        formState: cexFormStateFormly
    }
}


export const cexFeedBack100 : exerciceFeedBack = {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet lorem non rhoncus fringilla. Vivamus velit orci, feugiat in ultrices vel, eleifend id nisi. Etiam congue lectus lacus, eget semper turpis euismod sed. Quisque luctus massa a nunc interdum porttitor. Proin vehicula consectetur varius. Curabitur ultrices pellentesque sem, luctus elementum magna semper a. Ut ac orci sapien. Morbi vel eros pulvinar, lobortis metus eu, lacinia dolor. Sed eget libero sapien. Donec a ipsum vel nunc consectetur tempus. Sed at tincidunt est. Mauris id neque egestas, ullamcorper sapien a, volutpat mauris. Nunc vestibulum tellus eget porttitor hendrerit. Proin venenatis, velit et hendrerit feugiat, nunc velit venenatis nulla, sed semper augue odio in est. Nullam commodo sapien vitae erat suscipit, ac iaculis erat consequat. Nam sed commodo elit.",
    score: 100
}

export const cexFeedBack80 : exerciceFeedBack = {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet lorem non rhoncus fringilla. Vivamus velit orci, feugiat in ultrices vel, eleifend id nisi. Etiam congue lectus lacus, eget semper turpis euismod sed. Quisque luctus massa a nunc interdum porttitor. Proin vehicula consectetur varius. Curabitur ultrices pellentesque sem, luctus elementum magna semper a. Ut ac orci sapien. Morbi vel eros pulvinar, lobortis metus eu, lacinia dolor. Sed eget libero sapien. Donec a ipsum vel nunc consectetur tempus. Sed at tincidunt est. Mauris id neque egestas, ullamcorper sapien a, volutpat mauris. Nunc vestibulum tellus eget porttitor hendrerit. Proin venenatis, velit et hendrerit feugiat, nunc velit venenatis nulla, sed semper augue odio in est. Nullam commodo sapien vitae erat suscipit, ac iaculis erat consequat. Nam sed commodo elit.",
    score: 80
}

export const cexFeedBack50 : exerciceFeedBack = {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet lorem non rhoncus fringilla. Vivamus velit orci, feugiat in ultrices vel, eleifend id nisi. Etiam congue lectus lacus, eget semper turpis euismod sed. Quisque luctus massa a nunc interdum porttitor. Proin vehicula consectetur varius. Curabitur ultrices pellentesque sem, luctus elementum magna semper a. Ut ac orci sapien. Morbi vel eros pulvinar, lobortis metus eu, lacinia dolor. Sed eget libero sapien. Donec a ipsum vel nunc consectetur tempus. Sed at tincidunt est. Mauris id neque egestas, ullamcorper sapien a, volutpat mauris. Nunc vestibulum tellus eget porttitor hendrerit. Proin venenatis, velit et hendrerit feugiat, nunc velit venenatis nulla, sed semper augue odio in est. Nullam commodo sapien vitae erat suscipit, ac iaculis erat consequat. Nam sed commodo elit.",
    score: 50
}

export const cexFeedBack0 : exerciceFeedBack = {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet lorem non rhoncus fringilla. Vivamus velit orci, feugiat in ultrices vel, eleifend id nisi. Etiam congue lectus lacus, eget semper turpis euismod sed. Quisque luctus massa a nunc interdum porttitor. Proin vehicula consectetur varius. Curabitur ultrices pellentesque sem, luctus elementum magna semper a. Ut ac orci sapien. Morbi vel eros pulvinar, lobortis metus eu, lacinia dolor. Sed eget libero sapien. Donec a ipsum vel nunc consectetur tempus. Sed at tincidunt est. Mauris id neque egestas, ullamcorper sapien a, volutpat mauris. Nunc vestibulum tellus eget porttitor hendrerit. Proin venenatis, velit et hendrerit feugiat, nunc velit venenatis nulla, sed semper augue odio in est. Nullam commodo sapien vitae erat suscipit, ac iaculis erat consequat. Nam sed commodo elit.",
    score: 0
}

export const cexFeedBackUsed = cexFeedBack80;
