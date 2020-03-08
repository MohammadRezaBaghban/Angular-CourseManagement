import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  users: User[] = [];

  constructor(private courseService: CourseService, private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  getHeroes(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses.slice(1, 5));
  }
  getUsers(): void{
    this.userService.getUsers()
        .subscribe(users => this.users = users.slice(1,4));
  }
}