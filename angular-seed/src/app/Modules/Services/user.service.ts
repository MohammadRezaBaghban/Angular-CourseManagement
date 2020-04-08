import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserInterface } from '../user';
import { USERS } from '../Mock_Objects/mock-users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";
import { Role } from "../role";
import { RoleService} from "../Services/role-service.service"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://aimchatbot.herokuapp.com:443/users';  // URL to web api
  private userUrl = 'https://aimchatbot.herokuapp.com:443/user';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient, private roleSerive : RoleService) { }

  getUsers(): Observable<User[]> {
    //return of(USERS);
    //TODO get list of roles

    return this.http.get<UserInterface[]>(this.usersUrl)
      .pipe(
        map( response => {
          let users: User[] = [];
          response.forEach(element => {
            let role : Role;
            this.roleSerive.getRole(parseInt(element.roleId)).subscribe(r => role=r);
            let newUser: User = new User(element.id, role, element.firstName, element.lastName, element.dateOfBirth);
            users.push(newUser);
          })
          return users;
        })
      );
  }

  generateId(users: User[]): number {
    return users.length > 0 ?
      Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  addUser (user: User): Observable<User> {
    let addCI: UserInterface;
    addCI = {id: null, roleId: user.role.Id.toString(), firstName: user.first_name, lastName: user.last_name, email: "None", dateOfBirth: user.dob, username: "test", signup_date: "None", last_seen_date: "None", mobile: "None", address: "None", postcode: "None"};
    return this.http.post<User>(this.usersUrl, addCI, this.httpOptions).pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }

  updateUser (user: User): Observable<any> {
    const url = `${this.userUrl}/${user.id}`;
    let updateCI: UserInterface;

    updateCI = {id: user.id, roleId: user.role.Id.toString(), firstName: user.first_name, lastName: user.last_name, email: "None", dateOfBirth: user.dob, username: "test", signup_date: "None", last_seen_date: "None", mobile: "None", address: "None", postcode: "None"};
    return this.http.put(url, updateCI, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteUser (user: User): Observable<User> {
    const url = `${this.userUrl}/${user.id}`;
  
    return this.http.delete<User>(url, this.httpOptions);
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
