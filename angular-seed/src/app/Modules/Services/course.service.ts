import { Injectable } from '@angular/core';
import { Course, CourseInterface } from '../course';
import { Observable, of } from 'rxjs';
import { COURSES } from '../Mock_Objects/mock-courses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { ProfileCourseService } from './profile-course.service'

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'https://aimchatbot.herokuapp.com:443/course';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient, private profileCourseService: ProfileCourseService ) { }

  getCourse(id: number): Observable<Course> {
    //return of(COURSES.find(course => course.id === id));

    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<CourseInterface>(url)
      .pipe(
        map( response => {
          let course: Course;
          course.id = response.id;
          course.name = response.name;
          course.des = response.des;
          course.teachers = response.teachers;
          return course;
        })
      );
  }

  getCourses(): Observable<Course[]> {
    //return of(COURSES);

    return this.http.get<CourseInterface[]>(this.coursesUrl)
      .pipe(
        map( response => {
          let courses: Course[] = [];
          response.forEach(element => {
            let newCourse: Course = new Course(element.id, element.name, element.des, element.teachers, null);
            courses.push(newCourse);
          })
          return courses;
        })
      );
  }
  
  /*genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }*/

  addCourse (course: Course): Observable<Course> {
    let addCI: CourseInterface;
    addCI = {id: null, name: course.name, des: course.des, teachers: course.teachers};
    return this.http.post<Course>(this.coursesUrl, addCI, this.httpOptions).pipe(
      catchError(this.handleError<Course>('addCourse'))
    );
  }
  
  updateCourse (course: Course): Observable<any> {
    const url = `${this.coursesUrl}/${course.id}`;
    let upadateCI: CourseInterface;

    upadateCI = {id: course.id, name: course.name, des: course.des, teachers: course.teachers};
    return this.http.put(url, upadateCI, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteCourse (course: Course): Observable<Course> {
    const url = `${this.coursesUrl}/${course.id}`;
  
    return this.http.delete<Course>(url, this.httpOptions);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
