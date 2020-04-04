import { Component, OnInit } from '@angular/core';
import { Course, CourseInterface } from '../../Modules/course';
import { CourseService } from '../../Modules/Services/course.service';
import { User } from '../../Modules/user';
import { UserService } from '../../Modules/Services/user.service';
import { Profile } from '../../Modules/profile';
import { ProfileServiceService } from '../../Modules/Services/profile-service.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { element } from 'protractor';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  courseInter: CourseInterface[];
  displayCourses: Course[];
  selectedCourse: Course;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  profilesDropdownList = [];
  profilesDropdownSelected = [];
  profilesDropdownSettings = {};

  updateSelectedItems = [];
  updateprofilesDropdownSelected = [];
  updateName: string;
  updateDescription: string;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private userService: UserService,
    private profileService: ProfileServiceService
  ) { }

  ngOnInit(): void {
    this.getCourses();
    let teachers: User[] = this.getTeachers();
    let profiles: Profile[] = this.getProfiles();

    teachers.forEach(element => {
      this.dropdownList.push(element);
    });

    profiles.forEach(element => {
      this.profilesDropdownList.push(element);
    });

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select teachers",
      labelKey: "last_name",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true
    };

    this.profilesDropdownSettings = {
      singleSelection: false,
      text: "Select profiles",
      labelKey: "profileName",
      primaryKey: "profileName",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true
    };

    const id = +this.route.snapshot.paramMap.get('id');
    if (id != 0) {
      this.courseService.getCourse(id)
        .subscribe(hero => this.selectedCourse = hero);

      if (this.selectedCourse != null) {
        this.updateName = this.selectedCourse.name;
        this.updateDescription = this.selectedCourse.des;

        this.selectedCourse.teachers.forEach(element => {
          this.updateSelectedItems.push(element);
        });

        this.selectedCourse.profiles.forEach(element => {
          this.updateprofilesDropdownSelected.push(element);
        });
      }
    }
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.updateSelectedItems = [];
    this.updateprofilesDropdownSelected = [];

    this.updateName = course.name;
    this.updateDescription = course.des;

    course.teachers.forEach(element => {
      this.updateSelectedItems.push(element);
    });

    course.profiles.forEach(element => {
      this.updateprofilesDropdownSelected.push(element);
    });
  }

  search(term: string): void {
    if (term.length != 0) {
      this.displayCourses = this.courses.filter(
        course => course.name.toUpperCase().startsWith(term.toUpperCase()));
    }
    else {
      this.displayCourses = this.courses;
    }

  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => {this.courses = courses; this.displayCourses = courses;});
  }

  getTeachers(): User[] {
    let usersList: User[];
    this.userService.getUsers()
      .subscribe(users => usersList = users);

    return usersList.filter(u => u.role.RoleName == 'Teacher');
  }

  getProfiles(): Profile[] {
    let profileList: Profile[];
    this.profileService.getProfiles()
      .subscribe(profiles => profileList = profiles);

    return profileList;
  }

  add(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    if (!name || !description) { return; }
    let newCourse: Course = new Course(null, name, description, this.selectedItems, this.profilesDropdownSelected);

    this.courseService.addCourse(newCourse)
      .subscribe(() => {
        this.getCourses();

        //add the course to the profile
        this.profilesDropdownSelected.forEach(element => {
          (element as Profile).AddCourse(newCourse);
        });
      });

    

    this.selectedItems = [];
    this.profilesDropdownSelected = [];
  }

  update(course: Course): void {
    let courseToUpdate = this.courses.find(element => element.id == course.id);
    courseToUpdate.name = this.updateName;
    courseToUpdate.des = this.updateDescription;
    courseToUpdate.teachers = this.updateSelectedItems;
    courseToUpdate.profiles = this.updateprofilesDropdownSelected;

    //TODO: update the profile when changes are applied to the course.profile.

    this.courseService.updateCourse(courseToUpdate)
     .subscribe(() => this.getCourses());
  }

  delete(course: Course): void {
    this.courses.splice(this.courses.indexOf(course), 1);
    this.displayCourses = this.courses;

    this.courseService.deleteCourse(course).subscribe();
  }
}
