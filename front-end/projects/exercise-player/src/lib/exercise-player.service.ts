import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  OldExercise } from './models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisePlayerService {

  constructor(private httpClient: HttpClient) { }
  
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3ODYxOTgzLCJqdGkiOiJjNzE2ZDY0ZTQwYzU0OWZkODZlYzFhZjRlNzllMTZlMSIsInVzZXJfaWQiOjJ9.k293FN25D_1Sdn_ZIvFEu-YE6OFl5mRMRBPx_bjf1gU";

  getExercise(id : string) : Observable<OldExercise> {
    return this.httpClient.get<OldExercise>(`https://platon.dev/api/v1/loader/parse/${id}/`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }


}
