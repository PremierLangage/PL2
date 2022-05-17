import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface <%= classify(name) %>State extends IWebComponent {
  myproperty: string;
}

export const <%= classify(name) %>ComponentDefinition = defineWebComponent({
    type: WebComponentTypes.<%= type %>,
    name: '<%= classify(name) %>',
    icon: 'assets/images/components/<%= type %>s/<%= name %>/<%= name %>.svg',
    selector: 'wc-<%= name %>',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    fullDescriptionUrl: 'assets/docs/components/<%= type %>s/<%= name %>/<%= name %>.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            myproperty: { type: 'string', default: '', description: '' }
        }
    }
});
