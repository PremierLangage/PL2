import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from './web-component/web-component';

import { Exercise } from './exercise.service';

export interface ExerciseState extends IWebComponent {
    exercise: Exercise;
}

export const ExerciseComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Exercise',
    icon: '',
    selector: 'wc-exercise',
    description: "Permet d'afficher un fichier pl de la plateforme.",
    fullDescriptionUrl:
        '',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            exercise: {
                type: 'object',
                default: {},
                description: 'Fichier pl à afficher.',
            },
            items: {
                type: 'array',
                default: [],
                description: 'List beta.',
            },
        },
    },
    showcase: {
        exercise: {
            title: 'Demo',
            text: '1+1=3',
            form: `<wc-radio-group state='{"items":[{"content":"Choix 1"},{"content":"Choix 2"}]}' ></wc-radio-group>`,
            selector: 'wc-input-box',
            general_feedback: '\n',
            feedback_correct: "C'était bien la bonne réponse.",
            feedback_wrong: 'Essaie encore',
            state: {
                items: [
                    {
                        content: 'Choix 1',
                    },
                    {
                        content: 'Choix 2',
                    },
                ],
            }
        },
        items: [
            {
                content: 'Choix 1',
            },
            {
                content: 'Choix 2',
            },
        ],
    },
});
