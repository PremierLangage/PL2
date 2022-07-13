import { formState } from "./../exercice";

export const cexFormStateRadioGroup : formState = {
    selector: 'radioGroup',
    form: {
        disabled: false,
        horizontal: false,
        items: [
            {
                content: "### Markdown is supported !",
            },
            {
                content: "And you can define css properties per item",
                css: "background-color: lightblue"
            },
            {
                content: "Or even do both !!! ~~Too much power~~\n\n```shell\n:(){  :|:&  };:     #fork bomb ! ```",
                css: "text-shadow: 2px 2px 2px lightblue"
            }
        ]
    }
}


export const cexFormStateInputBoxText : formState = {
    selector: 'inputBox',
    form: {
        type: 'text',
        placeholder: 'Rentrez une donnée',
        disabled: false,
        textProperties: {
            maxChar: 15,
            completionText: [
                'test',
                'completion',
                'efficace'
            ],
        }
    }
}


export const cexFormStateInputBoxTextArea : formState = {
    selector: 'inputBox',
    form: {
        type: 'textarea',
        hint: '#### Markdown is supported ! \n*Feel free to use it whenever your want*\n| Table | Example |\n|--|--|\n| Works | Well |\n```python\ndef truc(i : int):\n    return 42\n```',
        placeholder: 'Rentrez une donnée',
        disabled: false,

        textareaProperties: {
            maxChar: 150,
            maxLine: 5,
            minLine: 2,
            completionText: [
                'test',
                'completion',
                'efficace'
            ],
        }
    }
}


export const cexFormStateInputBoxNumber : formState = {
    selector: 'inputBox',
    form: {
        type: 'number',
        hint: '#### Markdown is supported ! \n*Feel free to use it whenever your want*\n| Table | Example |\n|--|--|\n| Works | Well |\n```python\ndef truc(i : int):\n    return 42\n```',
        placeholder: 'Rentrez une donnée',
        disabled: false,
        numberProperties: {
            max: 42,
            min: 0,
            step: 2,
            unitPrefix: '£',
            unitSuffix: '$'
        }
    }
}

export const cexFormStateUsed : formState = cexFormStateRadioGroup;