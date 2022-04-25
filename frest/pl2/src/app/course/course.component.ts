import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  nunu: string;
  constructor(private route: ActivatedRoute) {
    this.nunu = '';
  }

  ngOnInit(): void {
    this.nunu = this.route.snapshot.paramMap.get('id') || 'no id';
  }
}
