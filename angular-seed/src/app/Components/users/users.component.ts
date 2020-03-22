import { Component, OnInit } from '@angular/core';
import { User } from '../../Modules/user';
import { UserService } from '../../Modules/Services/user.service';
import {Role} from '../../Modules/role';
import{RoleServiceService} from '../../Modules/Services/role-service.service';
import { element } from 'protractor';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;
  displayUsers: User[];

  dropdownList = [];
  selectedItem;
  dropdownSettings = {};

  updateSelectedItem;
  updateFirstName: string;
  updateLastName: string;
  updatedob: string;

  constructor(private userService: UserService, private roleService: RoleServiceService) { }

  ngOnInit(): void {
    this.getUsers();
    this.displayUsers = this.users;
    let roles: Role[] = this.getRoles();

    roles.forEach(element =>{
      this.dropdownList.push(element);
    });

    this.dropdownSettings = {
      singleSelection: true,
      text: "Select role",
      labelKey: "RoleName",
      enableSearchFilter: true
    };
  }
  
  onSelect(user: User): void {
    this.selectedUser = user;
    this.updateSelectedItem = user.role ;
    this.updateFirstName = user.first_name;
    this.updateLastName = user.last_name;
    this.updatedob = user.dob;

    
  }
  search(term: string): void {
    if (term.length != 0) {
      this.displayUsers = this.users.filter(
        user => user.first_name.toUpperCase().startsWith(term.toUpperCase()));
    }
    else
      this.displayUsers = this.users;
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  addUser(firstName: string, lastName: string, dob: string): void {
    if (!firstName && !lastName && !dob) { return; }
    let newUser: User = new User(this.userService.generateId(this.users), this.selectedItem, firstName, lastName, dob);
    this.users.push(newUser);

  }

  updateUser(user: User): void{
    let userToUpdate = this.users.find(element => element.id == user.id);
    userToUpdate.first_name = this.updateFirstName;
    userToUpdate.last_name = this.updateLastName;
    userToUpdate.dob = this.updatedob;
    userToUpdate.role = this.updateSelectedItem;
  }

  deleteUser(user: User): void {
    this.users.splice(this.users.indexOf(user), 1);
  }

  getRoles(): Role[]{
    let rolesList: Role[];
    this.roleService.getRoles()
        .subscribe(roles => rolesList = roles);
    return rolesList;
  } 
}
