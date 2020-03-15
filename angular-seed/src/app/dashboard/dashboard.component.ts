import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Role } from '../role/Dependencies/role';
import { RoleServiceService } from '../role/Dependencies/role-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  users: User[] = [];
  roles: Role[] = [];

  constructor(private courseService: CourseService, private userService: UserService, private roleService: RoleServiceService) { }

  ngOnInit() {
    this.getRoles();
    this.getCourses();
    this.getUsers();
  }

  getRoles(): void {
    this.roleService.getRoles()
      .subscribe(roles => this.roles = roles.slice(1, 4));
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses.slice(1, 5));
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 4));
  }
}