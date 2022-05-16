import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { <%= classify(name) %>ComponentDefinition, <%= classify(name) %>State } from './<%= name %>';

@Component({
    selector: 'wc-<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: ['<%= name %>.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(<%= classify(name) %>ComponentDefinition)
export class <%= classify(name) %>Component implements WebComponentHooks<<%= classify(name) %>State> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: <%= classify(name) %>State;

    constructor(
        readonly injector: Injector
    ) {}

    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The state that will be returned by the getter.
     * @returns the state or a computed version of the state.
     */
    onGetState(state: <%= classify(name) %>State) {
        return state;
    }

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remarks:
     * - `ngOnInit` hook is always called before this one.
     * - change detector is triggered right after the end of this method refresh the view.
     */
    onChangeState() {
    }

}
