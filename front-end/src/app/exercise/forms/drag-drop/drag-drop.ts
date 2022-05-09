import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';

export interface DragDropState extends IWebComponent {
    css: string;
    group: string;
    content: string;
    disabled: boolean;
    draggable: boolean;
}

export const DragDropComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'DragDrop',
    icon: 'assets/images/components/forms/drag-drop/drag-drop.svg',
    selector: 'wc-drag-drop',
    description: 'Permets de glisser déposer un élément.',
    fullDescriptionUrl: 'assets/docs/components/forms/drag-drop/drag-drop.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            css: {
                type: 'string',
                default: '',
                description: 'Voir API CSS.',
            },
            group: {
                type: 'string',
                default: '',
                description: 'Le groupe auquel appartient la zone.',
            },
            content: {
                type: 'string',
                default: '',
                description: 'Le contenu en markdown de la zone.',
            },
            disabled: {
                type: 'boolean',
                default: false,
                description: "Une valeur indiquant si l'élément est désactivé.",
            },
            draggable: {
                type: 'boolean',
                default: false,
                description: 'Une valeur indiquant si le composant est une draggable.',
            },
        },
    },
    showcase: {
        content: '$c = \\pm\\sqrt{a^2 + b^2}$',
        draggable: true,
    }
});
