import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';

export interface SortListItem {
    css?: string;
    content: string;
}

export interface SortListState extends IWebComponent {
    items: SortListItem[];
    disabled: boolean;
}

export const SortListComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'SortList',
    icon: 'assets/images/components/forms/sort-list/sort-list.svg',
    selector: 'wc-sort-list',
    description: 'Permets de créer une liste à ordonner.',
    fullDescriptionUrl: 'assets/docs/components/forms/sort-list/sort-list.md',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        title: 'SortList',
        required: ['items'],
        properties: {
            items: {
                type: 'array',
                default: [],
                description: 'La liste des éléments à ordonner.',
                items: {
                    type: ['string', 'object'],
                    required: ['content'],
                    additionalProperties: false,
                    properties: {
                        css: {
                            type: 'string',
                            description: 'Voir API CSS',
                        },
                        content: {
                            type: 'string',
                            description: 'Contenu en markdown.',
                        },
                    },
                },
            },
            disabled: {
                type: 'boolean',
                default: false,
                description: 'Désactiver le composant?',
            },
        },
    },
    showcase: {
        items: ['Choix 1', 'Choix 2', 'Choix 3'],
    },
});
