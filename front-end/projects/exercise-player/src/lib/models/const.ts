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
                statement: "Time to write stuffs",
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