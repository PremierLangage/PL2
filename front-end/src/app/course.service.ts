import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  private url = 'http://127.0.0.1:8000/api/';
  // http://127.0.0.1:8000/api/Course/
  getCourses(): Observable<any> {
    return this.http.get<any>(this.url + 'Course/');
  }
}
