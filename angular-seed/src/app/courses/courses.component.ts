import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Profile } from '../profile/Dependencies/profile';
import { ProfileServiceService } from '../profile/Dependencies/profile-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  selectedCourse: Course;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  profilesDropdownList = [];
  profilesDropdownSelected = [];
  profilesDropdownSettings = {};
  
  constructor(private courseService: CourseService, private userService: UserService, private profileService: ProfileServiceService) { }

  ngOnInit(): void {
    this.getCourses();
    let teachers: User[] = this.getTeachers();
    let profiles: Profile[] = this.getProfiles();

    teachers.forEach(element =>{
      this.dropdownList.push(element);
    });

    profiles.forEach(element => {
      this.profilesDropdownList.push(element);
      //console.log(element);
    });

    /*this.dropdownList = [
      {"id":1,"itemName":"India"},
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"},
      {"id":6,"itemName":"Germany"},
      {"id":7,"itemName":"France"},
      {"id":8,"itemName":"Russia"},
      {"id":9,"itemName":"Italy"},
      {"id":10,"itemName":"Sweden"}
    ];
    this.selectedItems = [
      {"id":2,"itemName":"Singapore"},
      {"id":3,"itemName":"Australia"},
      {"id":4,"itemName":"Canada"},
      {"id":5,"itemName":"South Korea"}
    ];*/

    this.dropdownSettings = { 
      singleSelection: false, 
      text:"Select teachers",
      labelKey: "last_name",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true
    };

    this.profilesDropdownSettings = { 
      singleSelection: false, 
      text:"Select profiles",
      labelKey: "profileName",
      primaryKey: "profileName",
      selectAllText:'Select All',
      unSelectAllText:'UnSelect All',
      enableSearchFilter: true
    };
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

  getCourses(): void {
    this.courseService.getCourses()
        .subscribe(courses => this.courses = courses);
  }

  getTeachers(): User[] {
    let usersList: User[];
    this.userService.getUsers()
        .subscribe(users => usersList = users);
    
    return usersList.filter(u => u.role == 'teacher');
  }

  getProfiles(): Profile[] {
      let profileList: Profile[];
      this.profileService.getProfiles()
          .subscribe(profiles => profileList = profiles);

      return profileList;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let newCourse: Course = new Course(this.courseService.genId(this.courses), name, this.selectedItems, this.profilesDropdownSelected);
    this.courses.push(newCourse);
    //TODO: add the course to the profile
    this.selectedItems = [];
    this.profilesDropdownSelected = [];

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
