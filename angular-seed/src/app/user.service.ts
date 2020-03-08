import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from './user';
import{USERS} from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  getUsers(): Observable<User[]>{
    return of(USERS);
  }

  generateId(users: User[]): number{
    return users.length > 0 ? 
    Math.max(...users.map(user => user.id)) + 1 : 11;
  }

}
