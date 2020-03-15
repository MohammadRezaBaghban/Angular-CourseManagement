import { Injectable } from '@angular/core';
import { Role } from './role';
import { ROLES } from './roles';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor() { }

  getRoles(): Observable<Role[]> {
    return of(ROLES);
  }
}
