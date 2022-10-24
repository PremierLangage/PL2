import { Component, Input, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";
import { activity, exerciceLoadingData, PRESENTATIONKEY } from "../../models/activity";

@Component({
    template: ''
})
export class TemplateSuperclass implements OnDestroy {

    @Input() set activity(value: activity) {
        this.__activity = value;
        this.__currentExercice = this.__activity.exercices[this.__activity.currentExercice ?? PRESENTATIONKEY];     
    }
    get activity() { return this.__activity; }


    @Input() set exerciceSelector(value: BehaviorSubject<string> | undefined) {
        this.__exerciceSelector = value;
    } get exerciceSelector() {
        return this.__exerciceSelector;
    }

    ngOnDestroy(): void {
        if (this.__susbcription_save)
            this.__susbcription_save?.unsubscribe();
    }

    __exerciceSelector?: BehaviorSubject<string>;

    __activity!: activity;

    __currentExercice?: exerciceLoadingData;

    __susbcription_save ?: Subscription;

    PRESENTATIONKEY = PRESENTATIONKEY;

    getCurrentExercice() {
        return this.__activity.exercices[this.__activity.currentExercice ?? PRESENTATIONKEY];
    }

    setCurrentExercice(value: string) {
        if (this.activity)
            this.activity.currentExercice = value;
    }
}
