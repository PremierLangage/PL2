import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError } from 'rxjs';
import { cexExercice, cexFeedBackUsed } from './models/constUsed/constUsed';
import { exercice, exerciceFeedBackPacket, formState } from './models/exercice';


@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  constructor(private http: HttpClient) {}

  sendformState(output: formState, uri: string) : Observable<exerciceFeedBackPacket> {
    return new Observable(observer => observer.next({gotFeedback: true, feedback : cexFeedBackUsed}));
    

    return this.http.post<exerciceFeedBackPacket>(uri, output);
  }

  getExercice(uri : string) : Observable<exercice> {
    return new Observable(observer => observer.next(cexExercice));
    
    
    return this.http.get<exercice>(uri).pipe(
      retry(3),
      catchError(error => {throw new Error(error)})
    );
  }  
}
