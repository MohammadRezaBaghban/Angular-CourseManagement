import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  selectedCourse: Course;
  
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe(courses => this.courses = courses);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let newCourse: Course = new Course(this.courseService.genId(this.courses), name);
    this.courses.push(newCourse);
    /*this.courseService.addCourse({ name } as Course)
      .subscribe(course => {
        this.courses.push(course);
      });*/
  }

  delete(course: Course): void {
    this.courses.splice(this.courses.indexOf(course),1);
    //this.courseService.deleteCourse(course).subscribe();
  }
}
