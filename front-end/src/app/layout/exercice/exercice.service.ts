import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formState } from 'src/app/models/exercice';
import { cexExercice } from 'src/app/models/constUsed/constUsed';


@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  readonly ROOT_URL = "https://platon.org/api/v1/play";

  constructor(private http: HttpClient) {}

  sendformState(output: formState) {
    this.http.post(this.ROOT_URL,  output)
      .subscribe((response) => {
        
      });
  }

  getExercice() {

  }
  exampleExercice = cexExercice;
  
}
