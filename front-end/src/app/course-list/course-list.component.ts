import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public courses: any[] = [];

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.service.getCourses().subscribe({
      next: (data) => {
        console.log(data);
        this.courses = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
