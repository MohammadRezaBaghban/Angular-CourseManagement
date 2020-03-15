import { Component, OnInit } from '@angular/core';
import { Profile } from './Dependencies/profile';
import { ProfileServiceService } from './Dependencies/profile-service.service';
import { Course } from '../courses/course';
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Array<Profile>;
  courses: Array<Course>;
  selectedProfile: Profile;

  constructor(private profileService: ProfileServiceService, private courseService: CourseService) {

  }

  getProfiles(): void {
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
    this.profiles[0].containingCourse.push(this.courses[0]);
    this.profiles[0].containingCourse.push(this.courses[2]);
    this.profiles[0].containingCourse.push(this.courses[3]);
    this.profiles[1].containingCourse.push(this.courses[1]);


  }

  onSelect(profile: Profile): void {
    this.selectedProfile = profile;
  }

  onDelete(profile: Profile): void {
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

  clearSelectedProfile() {
    this.selectedProfile = null;
  }


  ngOnInit(): void {
    this.getProfiles();
  }

}
