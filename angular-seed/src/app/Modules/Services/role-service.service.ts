import { Injectable } from '@angular/core';
import { Role, RoleInterface } from '../role';
import { ROLES } from '../Mock_Objects/mock-roles';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  //URL to web API
  private roleUrl = "https://aimchatbot.herokuapp.com:443/role";



  constructor(private http:HttpClient) { }

  getRoles(): Observable<Role[]> {

    return this.http.get<RoleInterface[]>(this.roleUrl).pipe(
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

  public getRole(id:number) : Observable<Role>{

     let roleResource = `${this.roleUrl}/${id}`;
     return this.http.get<RoleInterface>(roleResource).pipe(
       map( respone =>{
         return new Role(respone.id,respone.name,respone.des,respone.fte);
       })
     );

  }



}
