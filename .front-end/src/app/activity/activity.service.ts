import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import activity from '../models/activity.json';


@Injectable({
  providedIn: 'root',
})
export class ActivityService {
    constructor(private http: HttpClient) {}
    public activityShape:Activity = activity;
}


export interface Activity {
    title: string;
    description: string;
    exercises: string[];
  }