import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exerciceFeedBackPacket, formState } from '../exercice/models/exercice';
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
}
