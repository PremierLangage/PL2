import { Component, Input } from "@angular/core";
import { activity, exerciceLoadingData, PRESENTATIONKEY } from "../../models/activity";

@Component({
    template: ''
})
export class TemplateSuperclass {
    @Input() set activity(value: activity) {
        this.__activity = value;
        this.__currentExercice = this.__activity.exercices[this.__activity.currentExercice ?? PRESENTATIONKEY];
    }
    get activity() { return this.__activity; }
    __activity!: activity;

    __currentExercice?: exerciceLoadingData;

    PRESENTATIONKEY = PRESENTATIONKEY;

    getCurrentExercice() {
        return this.__activity.exercices[this.__activity.currentExercice ?? PRESENTATIONKEY];
    }

    setCurrentExercice(value: string) {
        if (this.activity)
            this.activity.currentExercice = value;
    }
}
