import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { activity, exerciceLoadingData, PRESENTATIONKEY } from "../../models/activity";

export interface keySet {
    key: string;
    value: any;
}

@Component({
    template: ''
})
export class ExerciceListSuperclass {
    @Input() set activity(value: activity) {
        this.__activity = value;
        this.__currentExercice = this.__activity.exercices[this.__activity.currentExercice ?? PRESENTATIONKEY];
        this.__exercices = [];
        Object.keys(this.activity.exercices).forEach(elem => {
            if (elem !== PRESENTATIONKEY)
                this.__exercices.push({key: elem, value: this.activity.exercices[elem]});
        });
    }
    get activity() { return this.__activity; }
    @Output() activityChange = new EventEmitter<activity>();

    @Input() exerciceSelector ?: BehaviorSubject<string>;

    __activity!: activity;

    __currentExercice?: exerciceLoadingData;
    
    __exercices: keySet[] = [];

    PRESENTATIONKEY = PRESENTATIONKEY;
    
    getCurrentExercice() {
        return this.__currentExercice;
    }

    setCurrentExercice(value: string) {
        console.log("test");

        if (this.activity)
            this.activity.currentExercice = value;
            this.exerciceSelector?.next(value);
    }

    getActivityExerciceList() {
        return this.__exercices;
    }
}
