import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formState } from './models/exercice';
import { cexExercice } from './models/constUsed/constUsed';


@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  readonly ROOT_URL = "https://platon.org/api/v1/play/";

  constructor(private http: HttpClient) {}

  sendformState(output: formState) {
    return this.http.post(this.ROOT_URL,  output);
  }

  getExercice(cid : string) {
    return this.http.get(this.ROOT_URL + cid);
  }  
}
