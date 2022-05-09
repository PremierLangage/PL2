import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface HintState extends IWebComponent {
  myproperty: string;
}

export const HintComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Hint',
    icon: 'assets/images/components/widgets/hint/hint.svg',
    selector: 'wc-hint',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
