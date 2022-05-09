import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface TimerState extends IWebComponent {
  myproperty: string;
}

export const TimerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Timer',
    icon: 'assets/images/components/widgets/timer/timer.svg',
    selector: 'wc-timer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
