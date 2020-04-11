import {Role} from './role';

export class User {
  id: number;
  role: Role;
  first_name: string;
  last_name: string;
  dob: string;
  constructor(id: number, role: Role, firstName: string, lastName: string, dob: string) {
    this.id = id;
    this.role = role;
    this.first_name = firstName;
    this.last_name = lastName;
    this.dob = dob;
  }
}

export interface UserInterface {
  id: number;
  roleId: string;
  username: string;
  email: string;
  dateOfBirth: string;
  signup_date: string;
  last_seen_date: string;
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  postcode: string;
}