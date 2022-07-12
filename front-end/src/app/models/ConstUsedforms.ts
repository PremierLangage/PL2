import { formState } from "./exercice";

export const cexFormStateRadioGroup : formState = {
    selector: 'radioGroup',
    form: {
        disabled: false,
        horizontal: false,
        items: [
            {
                content: "choix 1"
            },
            {
                content: "choix 2",
            },
            {
                content: "choix 3"
            }
        ]
    }
}


export const cexFormStateInputBoxText : formState = {
    selector: 'inputBox',
    form: {
        type: 'text',
        hint: 'test hint',
        prefix: '',
        suffix: '',
        appearance: 'standard',
        placeholder: 'Rentrez une donnée',
        disabled: false,
        completion: [
            'test',
            'completion',
            'efficace'
        ],
        textProperties: {
            maxChar: 150
        }
    }
}


export const cexFormStateInputBoxTextArea : formState = {
    selector: 'inputBox',
    form: {
        type: 'textarea',
        hint: 'test hint',
        prefix: '',
        suffix: '',
        appearance: 'standard',
        placeholder: 'Rentrez une donnée',
        disabled: false,
        completion: [
            'test',
            'completion',
            'efficace'
        ],
        textareaProperties: {
            maxChar: 150,
            maxLine: 5,
            minLine: 2
        }
    }
}


export const cexFormStateInputBoxNumber : formState = {
    selector: 'inputBox',
    form: {
        type: 'number',
        hint: 'test hint',
        prefix: '',
        suffix: '',
        appearance: 'standard',
        placeholder: 'Rentrez une donnée',
        disabled: false,
        completion: [
            'test',
            'completion',
            'efficace'
        ],
        numberProperties: {
            max: 42,
            min: 0,
            step: 2
        }
    }
}

export const cexFormStateUsed : formState = cexFormStateInputBoxText;