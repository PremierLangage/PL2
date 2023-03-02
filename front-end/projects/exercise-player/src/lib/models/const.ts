import { Exercise } from "./exercise";

const tagColors = [
    "magenta", "red", "volcano", "orange", "gold",
    "lime", "green", "cyan", "blue", "geekblue",
    "purple"
];

export const getTagColor = (e : string) => tagColors[Math.abs(e.split('').reduce((prevHash, currVal) =>
(((prevHash << 5) - prevHash) + currVal.charCodeAt(0))|0, 0) % tagColors.length)];


export const CExercise : Exercise = {
    id : "ffff-ffff-ffff-ffff-ffff",
    title: "test Exercice",
    author: "Ypicker",
    version: "0.0.42 Alpha",
    statement: "### Markdown works!\nCan establish *styled* text easely !",
    formArray : [
        {
            selector: 'mathlive',
            form : {
                disabled: false,
                statement: "## Test mathquill",
            }
        },
        {
            selector: 'radioGroup',
            form: {
                disabled: false,
                horizontal: false,
                statement: "## test statement *hehe*\nEnoncé petit mais assez long pour déranger l'affichage je peux continuer à écrire du coup 0 soucis, le text s'habituera ? ",
                statementHorizontal: true,
                items: [
                    {
                        content: "Choix 1",
                    },
                    {
                        content: "Choix 2",
                    },
                    {
                        content: "Choix 3",
                    },
                    {
                        content: "Choix 4",
                    },    
                ]
            }
        },
        {
            selector: 'radioGroup',
            form: {
                disabled: false,
                horizontal: false,
                statement: "## test statement *hehe*",
                items: [
                    {
                        content: "Choix 1",
                    },
                    {
                        content: "Choix 2",
                    },
                    {
                        content: "Choix 3",
                    },
                    {
                        content: "Choix 4",
                    },               
                ]
            }
        },
        {
            selector: "inputBox",
            form: {
                disabled : false,
                statement: "# Time to write stuffs",
                type: 'text',
                hint: "what do you mean",
                placeholder: 'write something',
                textProperties: {
                    maxChar: 64,
                    completionText: [
                        "test",
                        'platon',
                        "antonin"
                    ]
                }
            }
        },
        {
            selector: "codeEditor",
            form : {
                disabled: false,
                statement: "## Finally some Code",
                initialCode: "#Write your code here",
                tabSize: 4,
                language: "python",
                quickSuggestions: true
            }
        },
        {
            selector: "form",
            form : {
                disabled: true,
                statement: "## Chose your faith",
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
                            type: 'number',
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
                            placeholder: 'Optionel, rentrez pour débloquer une autre',
                            required: false,
                        }
                    },
                    {
                        key : 'checkbox',
                        type: 'checkbox',
                        props: {
                            label: "Bien joué !"
                        },
                        expressions: {
                            hide: '!model.optional'
                        }
                    },
                    {
                        key: 'default',
                        type: 'textarea',
                        props : {
                            label: "Valeur par défaut",
                        },
                        defaultValue: 'This is a default value',
                    }
                ],
            }
        }
    ],

    displayData: {
        templateSelector: "default"
    },

    tags : [
        "L1",
        "Informatique",
        "WIP",
        "Platon",
        "Test"
    ]
}