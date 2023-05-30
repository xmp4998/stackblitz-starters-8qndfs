import { Component, Input } from '@angular/core';
import { Course } from '../Course.Interface';
import { testcourse } from '../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  // course = 'Web Development';
  course: Course = {
    course_id: 1,
    course_title: 'Web Develop',
    semester: 'S1',
    period: 'Week 12',
    lecturer: 'Test naem',
  };
}
