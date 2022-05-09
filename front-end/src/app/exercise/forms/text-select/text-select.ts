import { stripIndent } from 'common-tags';
import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';

export interface TextSelectSelection {
    position: number | number[];
    content?: string;
    css?: string;
}
export interface TextSelectState extends IWebComponent {
    text: string;
    mode: string;
    regex: string;
    selections: TextSelectSelection[];
}

export const TextSelectComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'TextSelect',
    icon: 'assets/images/components/forms/text-select/text-select.svg',
    selector: 'wc-text-select',
    description: 'Permets de sélectionner des parties d\'un texte.',
    fullDescriptionUrl: 'assets/docs/components/forms/text-select/text-select.md',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        title: 'TextSelect',
        required: ['text', 'mode'],
        properties: {
            text: {
                type: 'string',
                default: '',
                description: 'Le texte à afficher.',
            },
            mode: {
                type: 'string',
                enum: ['free', 'units', 'regex'],
                default: 'free',
                description: 'Le mode de découpage.',
            },
            regex: {
                type: 'string',
                description: 'Une expression régulière (JavaScript) pour indiquer les parties selectionnables (si mode = regex).',
                default: '',
            },
            selections: {
                type: 'array',
                default: [],
                description: 'La liste des éléments sélectionnés.',
                items: {
                    type: 'object',
                    required: ['position'],
                    properties: {
                        css: {
                            type: 'string',
                            description: 'Voir API CSS',
                        },
                        content: {
                            type: 'string',
                            description: 'Texte de la sélection (sans les espaces de début et fin).'
                        },
                        position: {
                            type: ['number', 'array'],
                            description: 'La position de la sélection',
                            items: {
                                type: 'number',
                                minItems: 2,
                                maxItems: 2
                            }
                        }
                    },
                    additionalProperties: false,
                }
            },
        },
    },
    showcase: {
        mode: 'free',
        text: stripIndent`
        Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit.
        Dignissimos laboriosam, quibusdam voluptates doloremque voluptatem animi. Si
        `,
    },
});
