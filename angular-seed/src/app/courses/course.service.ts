import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, of } from 'rxjs';
import { COURSES } from '../mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(COURSES);
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
