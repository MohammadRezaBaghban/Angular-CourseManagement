import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';
import { User } from '../users/Dependencies/user';
import { UserService } from '../users/Dependencies/user.service';
import { Role } from '../role/Dependencies/role';
import { RoleServiceService } from '../role/Dependencies/role-service.service';
import { Profile } from '../profile/Dependencies/profile';
import { ProfileServiceService } from '../profile/Dependencies/profile-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: Course[] = [];
  users: User[] = [];
  roles: Role[] = [];
  profiles: Profile[] = [];

  constructor(private courseService: CourseService,
    private userService: UserService,
    private roleService: RoleServiceService,
    private profileService: ProfileServiceService
  ) { }

  ngOnInit() {
    this.getRoles();
    this.getCourses();
    this.getUsers();
    this.getProfiles();
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

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles.slice(0, 3));
  }
}