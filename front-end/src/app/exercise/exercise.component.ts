import {
  ChangeDetectionStrategy,
  Injector,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit,
  AfterViewInit,
  Renderer2,
  ComponentFactory,
} from '@angular/core';
import { WebComponent, WebComponentHooks } from './web-component/web-component';
import { WebComponentService } from './web-component/web-component.service';
import {
  ExerciseComponentDefinition,
  ExerciseState,
} from './exercise-viewer';

import { ExerciseService } from '../exercise/exercise.service';

@Component({
  selector: 'wc-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
@WebComponent(ExerciseComponentDefinition)

export class ExerciseComponent
  implements WebComponentHooks<ExerciseState>, AfterViewInit {
  /**
   * The state of the component.
   * The @WebComponent decorator create a getter and a setter during runtime to
   * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
   * and `onAfterDeserialize` (after the setter runs).
   */
  @Input() state!: ExerciseState;
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  @ViewChild('real', { read: ViewContainerRef })
  real!: ViewContainerRef;

  private launched: boolean = false;

  constructor(
      readonly injector: Injector,
      private componentFactoryResolver: ComponentFactoryResolver,
      private componentService: WebComponentService,
      private renderer2: Renderer2,
      private viewRef: ViewContainerRef,
      private service: ExerciseService,
  ) {}

  ngAfterViewInit(): void {
      // const elem = `<${this.state.platon.selector} state="${this.state.platon.state}"></${this.state.platon.selector}>`;
      // this.state.platon.form = elem;
      // const factory = this.componentFactoryResolver.resolveComponentFactory(
      //     InputBoxComponent
      // );
      // //this.container.clear();
      // const componentRef = this.viewRef.createComponent(factory);
      // componentRef.instance.state = {
      //     placeholder: 'bandes de moules',
      //     hint: 'hint',
      //     value: 'hhh',
      //     prefix: 'gg',
      //     suffix: 'iiii',
      //     type: 'text',
      //     appearance: 'standard',
      //     disabled: false,
      //     completion: [],
      //     cid: '099999',
      //     debug: true,
      //     selector: '',
      // };
      // this.launched = true;
  }

  create() {
      /*
      let component = this.componentService.findBySelector(
          this.state.platon.selector
      );
      */
      //componentRef.instance.onChangeState();
  }

  /**
   * This method is called immediately after the `state` getter runs with the object that
   * will be returned by the getter.
   * Define this method to handle any additional post validation tasks.
   *
   * @param state The state that will be returned by the getter.
   * @returns the state or a computed version of the state.
   */
  onGetState(state: ExerciseState) {
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
  onChangeState() {}
}

