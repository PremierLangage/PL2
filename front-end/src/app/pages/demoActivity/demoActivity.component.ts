import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExercisePlayer } from 'projects/exercise-player/src/lib/exercise-player.model';
import { getTagColor } from 'projects/exercise-player/src/lib/models/const';
import { Exercise } from 'projects/exercise-player/src/lib/models/exercise';
import { ExercisePlayerService } from 'projects/exercise-player/src/public-api';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-demoActivity',
  templateUrl: './demoActivity.component.html',
  styleUrls: ['./demoActivity.component.css'],
})
export class DemoActivityComponent implements OnInit, OnDestroy {

  private readonly subscriptions : Subscription[] = [];
  private readonly _context = new BehaviorSubject<DemoActivityComponentContext>(this.defaultContext);
  private id !: string;

  get defaultContext(): DemoActivityComponentContext {
    return { exercisePlayer: undefined };
  }

  get contextChange(): Observable<DemoActivityComponentContext> {
    return this._context.asObservable();
  }

  context = this.defaultContext;

  constructor(
    private readonly playerService : ExercisePlayerService,
    private readonly activatedRoute : ActivatedRoute,
  ) { }

  color(str : string) {
    return getTagColor(str);
  }

  log() {
    console.log("Output : {\n");
    this.context.exercisePlayer?.formArray.forEach(form => {
      console.log(JSON.stringify(form.output));
    });
    console.log("}");
  }

  ngOnInit() {
    this.subscriptions.push(
      this.contextChange.subscribe(context => {
        this.context = context
      }),
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        this.playerService.getExercise(this.id).subscribe(exercise => {
          this._context.next({ exercisePlayer: {
            
              "author": exercise.author,
              "version": exercise.version,
              "title": exercise.title,
              "statement": exercise.statement,
            "formArray": [{ "selector": exercise.formState.selector, "form": exercise.formState.form}],
              "tags": exercise.tags,
              "id": exercise.id,
              displayData: exercise.displayData
          } });
          console.log(exercise);
          console.log(this.context.exercisePlayer);

        });
      })
    )
  }


  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  } 

}


export interface DemoActivityComponentContext {
  exercisePlayer ?: Exercise;
}
