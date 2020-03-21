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
  fetchData: boolean = false;

  constructor(private profileService: ProfileServiceService, private courseService: CourseService) {

  }

  getProfiles(): void {
    this.profileService.getProfiles().subscribe(profiles => this.profiles = profiles);
    this.courseService.getCourses().subscribe(courses => this.courses = courses);

    this.courses.forEach(element => {
      element.profiles.forEach(profile => {
        this.addCourseToProfile(element, profile);
      })
    });


  }

  private addCourseToProfile(course: Course, profile: Profile) {

    let currentProfile = this.profiles.find(p => p.profileName == profile.profileName);
    if (currentProfile != undefined) {
      currentProfile.AddCourse(course);
    } else {
      new Error("There is no such a profile in profiles list");
    }

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
    if (!this.fetchData) {
      this.getProfiles();
      this.fetchData = true;
    }

  }

}
