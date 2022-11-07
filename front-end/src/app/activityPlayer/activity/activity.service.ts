import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { cexExercice, cexExerciceFirst, cexExerciceFourth, cexExerciceSecond, cexExerciceThird } from '../exercice/models/constUsed/constUsed';
import { exercice, exerciceFeedBackPacket, formState } from '../exercice/models/exercice';
import { cexFeedBackUsed } from './models/constUsed/feedback';


@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  sendformState(output: formState, uri: string) : Observable<exerciceFeedBackPacket>  {
    return new Observable(observer => observer.next({gotFeedback: true, feedback : cexFeedBackUsed}));
    

    return this.http.post<exerciceFeedBackPacket>(uri, output);
  }

  getExercice(uri : string) : Observable<exercice> {
    // console.log("Service recieved : " + uri);
    switch (uri) {
      case "first": 
        return new Observable(observer => observer.next(cexExerciceFirst));
      case "second":
          return new Observable(observer => observer.next(cexExerciceSecond));
      case "third": 
        return new Observable(observer => observer.next(cexExerciceThird));
      case "fourth":
        return new Observable(observer => observer.next(cexExerciceFourth));
      default: 
        return new Observable(observer => observer.next(cexExercice));
    }
    
    
    return this.http.get<exercice>(uri).pipe(
      retry(3),
      catchError(error => {throw new Error(error)})
    );
  }  
}
