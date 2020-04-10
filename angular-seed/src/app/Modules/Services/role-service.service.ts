import { Injectable } from '@angular/core';
import { Role, RoleInterface } from '../role';
import { ROLES } from '../Mock_Objects/mock-roles';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  

  //URL to web API
  private roleUrl = "https://aimchatbot.herokuapp.com:443/role";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http:HttpClient) { }

  //Get list of Role
  public GetRoles(): Observable<Role[]> {

    return this.http.get<RoleInterface[]>(this.roleUrl).pipe(
      tap(_ => console.log('fetched roles')),
      catchError(this.handleError<RoleInterface[]>('getRoles', [])),
      map( response => {
        let roles: Role[] = [];
        response.forEach(element => {
          let newRole: Role = new Role(element.id,element.name,element.des,element.fte);
          roles.push(newRole);
        })
        return roles;
      })
    );
  }

  //Get Specific Role
  public GetRole(id:number) : Observable<Role>{

     let roleResource = `${this.roleUrl}/${id}`;
     return this.http.get<RoleInterface>(roleResource).pipe(
      tap(_ => console.log(`fetched role id=${id}`)),
      catchError(this.handleError<RoleInterface>(`getRole id=${id}`)),
       map( respone =>{
         return new Role(respone.id,respone.name,respone.des,respone.fte);
       })
     );

  }

  // PUT role on the server
  public UpdateRole(role: Role): Observable<any> {
    const url = `${this.roleUrl}/${role.Id}`;
    let updatedRole : RoleInterface;
  
    updatedRole = {id:role.Id,name:role.RoleName,des:role.Description,fte:role.FTE};

    return this.http.put(url, updatedRole, this.httpOptions)
    .pipe(
      tap(_ => console.log(`updated role id=${role.Id}`)),
      catchError(this.handleError<any>('UpdateRole'))
    );
  }

  // POST role on the Server 
  public AddRole(role:Role): Observable<any>{
    let newRole = {name:role.RoleName,des:role.Description,fte:role.FTE};
    return this.http.post<Role>(this.roleUrl,newRole,this.httpOptions).pipe(
      catchError(this.handleError<Role>('AddRole'))
    )
  }

  // Delete role on the Server 
  public DeleteRole(role:Role): Observable<any>{
    const url = `${this.roleUrl}/${role.Id}`;
    return this.http.delete<Role>(url,this.httpOptions).pipe(
      catchError(this.handleError<Role>('Delete Role'))
    )
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


