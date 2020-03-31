import { Injectable } from '@angular/core';
import { Course, CourseInterface } from '../course';
import { Observable, of } from 'rxjs';
import { COURSES } from '../Mock_Objects/mock-courses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private coursesUrl = 'https://aimchatbot.herokuapp.com:443/course';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor( private http: HttpClient ) { }

  getCourse(id: number): Observable<Course> {
    return of(COURSES.find(course => course.id === id));
  }

  getCourses(): Observable<Course[]> {
    //return of(COURSES);
    return this.http.get<CourseInterface[]>(this.coursesUrl)
      .pipe(
        map( response => {
          let courses: Course[] = [];
          response.forEach(element => {
            let newCourse: Course = new Course(element.id, element.name, element.teachers, null);
            courses.push(newCourse);
          })
          return courses;
        })
      );
    
  }
  
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 11;
  }

  addCourse (course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course, this.httpOptions).pipe(
      catchError(this.handleError<Course>('addCourse'))
    );
  }
  
  /*updateCourse (course: Course): Observable<any> {
    return this.http.put(this.heroesUrl, course, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${course.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }*/

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
