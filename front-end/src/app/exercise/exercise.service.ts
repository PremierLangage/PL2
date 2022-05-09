import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import exercise1 from '../models/exercise1.json';
import exercise2 from '../models/exercise2.json';
import exercise3 from '../models/exercise3.json';


@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
    constructor(private http: HttpClient) {}
    public exercise1:any = exercise1;
    public exercise2:any = exercise2;
    public exercise3:any = exercise3;
    getExercise(str: string) : any {
        if (str == "./exercise1.json"){
            return exercise1;
        }
        if (str == "./exercise2.json"){
            return exercise2;
        }
        if (str == "./exercise3.json"){
            return exercise3;
        }
    }
}

export interface Exercise {
    title: string;
    text: string;
    form: string;
    state: Object;
    selector: string;
    general_feedback: string;
    feedback_correct: string;
    feedback_wrong: string;
}
