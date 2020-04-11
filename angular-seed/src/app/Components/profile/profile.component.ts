import { Component, OnInit } from '@angular/core';
import { Profile, ProfileCourseInterface } from '../../Modules/profile';
import { ProfileServiceService } from '../../Modules/Services/profile-service.service';
import { Course } from '../../Modules/course';
import { CourseService } from '../../Modules/Services/course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Array<Profile>;
  courses: Array<Course>;
  selectedProfile: Profile;
  profileCourse: ProfileCourseInterface[];
  fetchData: boolean = false;

  constructor(private profileService: ProfileServiceService, private courseService: CourseService) {

  }

  getProfiles():void{
    this.profileService.getRawProfiles().subscribe(x=>this.profiles=x);
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses.slice(0, 4));
  }

  getProfilesCourse():void{
    this.profileService.getProfileCourse().subscribe(x=>this.profileCourse=x);
  }

  getProfileCourse(): void {

    this.courseService.getCourses().subscribe(courses => this.courses = courses);

    this.courses.forEach(element => {
      element.profiles.forEach(profile => {
        this.addCourseToProfile(element, profile);
      })
    });
  }

  

  search(term: string): void {
    if (term.length != 0) {
      this.profiles = this.profiles.filter(
        profile => profile.profileName.toUpperCase().startsWith(term.trim().toUpperCase()));
    }
    else {
      this.getProfiles();
    }
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
    if (this.selectedProfile == profile) {
      this.selectedProfile = null;
    } else {
      this.selectedProfile = profile;
    }
  }

  MapProfileCourse():void{

    this.profileCourse.forEach(element => {
            
      let profile : Profile = this.profiles.find(x=>x.profileId==element.profile);
      let course : Course = this.courses.find(x=>x.id==element.course);

      //course.AddProfile(profile);
      profile.AddCourse(course);
    });
  }


  ngOnInit(): void {
    this.getCourses()
    this.getProfiles()
    this.getProfilesCourse();
    
    setTimeout(()=>{
      this.MapProfileCourse();
    },1000);

  }

}
