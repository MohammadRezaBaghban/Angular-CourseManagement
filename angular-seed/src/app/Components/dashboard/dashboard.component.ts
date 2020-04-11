import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../../Modules/course';
import { CourseService } from '../../Modules/Services/course.service';
import { User } from '../../Modules/user';
import { UserService } from '../../Modules/Services/user.service';
import { Role } from '../../Modules/role';
import { RoleServiceService } from '../../Modules/Services/role-service.service';
import { Profile, ProfileCourseInterface } from '../../Modules/profile';
import { ProfileServiceService } from '../../Modules/Services/profile-service.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public destroyed = new Subject<any>();
  initialRun: boolean = false;
  courses: Course[] = [];
  users: User[] = [];
  roles: Role[] = [];
  profiles: Profile[] = [];
  profileCourse: ProfileCourseInterface[];
  selectedProfile: Profile;
  selectedRole: Role;

  constructor(private courseService: CourseService,
    private userService: UserService,
    private roleService: RoleServiceService,
    private profileService: ProfileServiceService
  ) {}

  ngOnInit() {
    

    this.getRoles();
    this.getCourses();
    this.getUsers();
    this.getProfiles();
    this.getProfileCourse();
    
    setTimeout(()=>{
      this.MapProfileCourse();
    },1000);
  }


  getRoles(): void {
    this.roleService.GetRoles()
      .subscribe(roles => this.roles = roles.slice(0, 4));
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses.slice(0, 4));
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(0, 4));
  }

  getProfiles(): void {
    this.profileService.getRawProfiles().subscribe(x=>this.profiles=x);
  }

  getProfileCourse():void{
    this.profileService.getProfileCourse().subscribe(x=>this.profileCourse=x);
  }

  MapProfileCourse():void{

    this.profileCourse.forEach(element => {
            
      let profile : Profile = this.profiles.find(x=>x.profileId==element.profile);
      let course : Course = this.courses.find(x=>x.id==element.course);

      //course.AddProfile(profile);
      profile.AddCourse(course);
    });
  }

  onProfileSelect(profile: Profile): void {
    if(profile==this.selectedProfile){
      this.selectedProfile = null;
    }else{
      this.selectedProfile = profile;
    }
  }

  onRoleSelect(role: Role): void {
    if(role==this.selectedRole){
      this.selectedRole = null;
    }else{
      this.selectedRole = role;
    }
  }
}