import { Injectable } from '@angular/core';
import { Course, CourseInterface } from '../course';
import { Observable, of } from 'rxjs';
import { COURSES } from '../Mock_Objects/mock-courses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'https://aimchatbot.herokuapp.com:443/course';  // URL to web api

  constructor( private http: HttpClient ) { }

  getCourse(id: number): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }

  getCourses(): Observable<Course[]> {
    //return of(COURSES);
    let courses: Course[];
    let courseInt: CourseInterface[];

    this.getCoursesInterface()
      .subscribe(res => {
        console.log(courseInt);

        return of(courses);
      });

    

    /*courseInt.forEach(element => {
      let newCourse: Course = new Course(element.id, element.name, element.teachers, null);
      courses.push(newCourse);
    })*/
  
    //return of(courses);
  }

  getCoursesInterface(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(this.coursesUrl);
  }

  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }

  /*addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  
  updateCourse (course: Course): Observable<any> {
    return this.http.put(this.heroesUrl, course, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${course.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteCourse (course: Course | number): Observable<Course> {
    const id = typeof course === 'number' ? course : course.id;
    const url = `${this.coursesUrl}/${id}`;
  
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted course id=${id}`)),
      catchError(this.handleError<Course>('deleteCourse'))
    );
  }*/
}
