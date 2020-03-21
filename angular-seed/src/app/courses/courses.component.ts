import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Profile } from '../profile/Dependencies/profile';
import { ProfileServiceService } from '../profile/Dependencies/profile-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayCourses: Course[];
  selectedCourse: Course;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  profilesDropdownList = [];
  profilesDropdownSelected = [];
  profilesDropdownSettings = {};

  updateSelectedItems =[];
  updateprofilesDropdownSelected = [];
  updateName: string;
  
  constructor(private courseService: CourseService, private userService: UserService, private profileService: ProfileServiceService) { }

  ngOnInit(): void {
    this.getCourses();
    this.displayCourses = this.courses;
    let teachers: User[] = this.getTeachers();
    let profiles: Profile[] = this.getProfiles();

    teachers.forEach(element =>{
      this.dropdownList.push(element);
    });

    profiles.forEach(element => {
      this.profilesDropdownList.push(element);
      //console.log(element);
    });

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
    this.updateSelectedItems = [];
    this.updateprofilesDropdownSelected = [];

    this.updateName = course.name;

    course.teachers.forEach(element => {
      this.updateSelectedItems.push(element);
    });

    course.profiles.forEach(element => {
      this.updateprofilesDropdownSelected.push(element);
    });
  }

  search(term: string): void {
    if(term.length != 0)
    {
      this.displayCourses = this.courses.filter(
            course => course.name.toUpperCase().startsWith(term.toUpperCase()));
    }
    else
      this.displayCourses = this.courses;
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
    //add the course to the profile
    this.profilesDropdownSelected.forEach(element => {
      (element as Profile).AddCourse(newCourse);
    });

    this.selectedItems = [];
    this.profilesDropdownSelected = [];

    /*this.courseService.addCourse({ name } as Course)
      .subscribe(course => {
        this.courses.push(course);
      });*/
  }

  update(course: Course): void {
    let courseToUpdate = this.courses.find(element => element.id == course.id);
    courseToUpdate.name = this.updateName;
    courseToUpdate.teachers = this.updateSelectedItems;
    courseToUpdate.profiles = this.updateprofilesDropdownSelected;

    //TODO: update the profile when changes are applied to the course.profile.

    /*this.courseService.updateCourse(course)
     .subscribe(() => this.goBack());*/
  }

  delete(course: Course): void {
    this.courses.splice(this.courses.indexOf(course),1);
    //this.courseService.deleteCourse(course).subscribe();
  }
}
