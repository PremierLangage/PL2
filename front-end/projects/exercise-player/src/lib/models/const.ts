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
                statement: "## test statement *hehe*",
                statementHorizontal: true,
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
        },
        {
            selector: 'radioGroup',
            form: {
                disabled: false,
                horizontal: false,
                statement: "## test statement *hehe*",
                items: [
                    {
                        content: "### Markdown is supported !",
                    },
                    {
                        content: "Or even do both !!! ~~Too much power~~\n\n```shell\n:(){  :|:&  };:     #fork bomb ! ```",
                        css: "text-shadow: 2px 2px 2px lightblue"
                    }
                ]
            }
        },
        {
            selector: "InputBox",
            form: {
                disabled : false
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