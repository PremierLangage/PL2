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


export const cexFormStateCodeEditor : formState = {
    selector: 'codeEditor',
    form: {
        initialCode: '#test initial code',
        height: 42,
        tabSize: 10,
        language: 'python',
        quickSuggestions: true,
        disabled: false
    }
}

export const cexFormStateFormly : formState = {
    selector: 'form',
    form : {
        fields: [
            {
                key: 'name',
                type: 'input',
                props: {
                    label: 'Name',
                    placeholder: 'Entrez un nom',
                    required: true,
                }
            },
            {
                key: 'chained.value',
                type: 'input',
                props: {
                    label: 'Age',
                    placeholder: 'Entrez un age',
                    required: true,
                }
            },
            {
                key: 'gender',
                type: 'select',
                props: {
                    label: 'Genre',
                    options: [
                    { label: 'homme', value: 'male' },
                    { label: 'femme', value: 'female' },
                    { label: 'autres', value: 'others' },
                    ],
                    required: true,
                }
            },
            {
                key: 'optional',
                type: 'input',
                props: {
                    label: 'Origine',
                    placeholder: 'Optionel',
                    required: false,
                }
            },  
        ],
        disabled: false
    }
    }

export const cexFormStateUsed : formState = cexFormStateCodeEditor;