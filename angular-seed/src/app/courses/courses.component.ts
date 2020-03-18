import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { User } from '../users/Dependencies/user';
import { UserService } from '../users/Dependencies/user.service';

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
  
  constructor(private courseService: CourseService, private userService: UserService) { }

  ngOnInit(): void {
    this.getCourses();
    let teachers: User[] = this.getTeachers();

    teachers.forEach(element =>{
      this.dropdownList.push(element);
      console.log(element);
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    let newCourse: Course = new Course(this.courseService.genId(this.courses), name, this.selectedItems);
    this.courses.push(newCourse);
    this.selectedItems = [];
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
