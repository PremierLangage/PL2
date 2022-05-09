import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';

export interface InputBoxState extends IWebComponent {
    type: 'number' | 'text' | 'textarea';
    hint: string;
    value: string | number;
    prefix: string;
    suffix: string;
    appearance: 'legacy' | 'standard' | 'fill' | 'outline';
    placeholder: string;
    disabled: boolean;
    completion: string[];
}

export const InputBoxComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'InputBox',
    icon: 'assets/images/components/forms/input-box/input-box.svg',
    selector: 'wc-input-box',
    description: 'Permets de saisir du texte dans un champ de saisi.',
    fullDescriptionUrl: 'assets/docs/components/forms/input-box/input-box.md',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        title: 'InputBox',
        properties: {
            hint: {
                type: 'string',
                default: '',
                description:
                    'Une indication à afficher en bas du champ de saisi.',
            },
            type: {
                type: 'string',
                default: 'text',
                enum: ['text', 'number', 'textarea'],
                description: 'Le type du champ de saisi.',
            },
            value: {
                type: ['string', 'number'],
                default: '',
                description: 'La valeur du champ de saisi.',
            },
            prefix: {
                type: 'string',
                default: '',
                description: 'Une icône à afficher à gauche du champ de saisi.',
            },
            suffix: {
                type: 'string',
                default: '',
                description: 'Une icône à afficher à droite du champ de saisi.',
            },
            appearance: {
                type: 'string',
                default: 'fill', description: 'L\'apparence du champ de saisi.',
                enum: ['legacy', 'standard', 'fill', 'outline'],
            },
            placeholder: {
                type: 'string',
                default: '',
                description: 'Le texte indicatif du champ de saisi.',
            },
            disabled: {
                type: 'boolean',
                default: false,
                description: 'Désactiver le champ de saisi?',
            },
            completion: {
                type: 'array',
                default: [],
                items: {
                    type: 'string',
                },
                description:
                    'Une liste de suggestions à proposer automatiquement lors de la saisi.',
            },
        },
    },
    showcase: {
        appearance: 'fill',
        placeholder: 'Entrez votre texte...',
        suffix: 'clarity happy-face color=FF0000',
        completion: ['France', 'Espagne', 'Italie'],
    },
});
