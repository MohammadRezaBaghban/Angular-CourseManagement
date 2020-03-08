import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable, of } from 'rxjs';
import{USERS} from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  getUsers(): Observable<User[]>{
    return of(USERS);
  }

}
