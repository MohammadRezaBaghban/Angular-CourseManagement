import { Injectable } from '@angular/core';
import { ProfileCourse } from '../profile-course';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileCourseService {
  private profileCoursesUrl = 'https://aimchatbot.herokuapp.com:443/profile-course';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getProfileCourses(): Observable<ProfileCourse[]> {
    return this.http.get<ProfileCourse[]>(this.profileCoursesUrl);
  }
}
