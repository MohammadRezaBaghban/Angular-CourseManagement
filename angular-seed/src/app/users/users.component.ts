import { Component, OnInit } from '@angular/core';
import { User } from './Dependencies/user';
//import { USERS } from '../mock-users';
import { UserService } from './Dependencies/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  selectedUser: User;

  constructor(private userService: UserService){ }

  ngOnInit(): void {
    this.getUsers();
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  getUsers(): void{
    this.userService.getUsers()
        .subscribe(users => this.users = users);
  }
  addUser(role:string, firstName:string, lastName:string, dob:string ): void{
    if(!role && !firstName && !lastName && !dob){return;}
    let newUser: User = new User(this.userService.generateId(this.users), role, firstName, lastName, dob);
    this.users.push(newUser);
  }

  deleteUser(user: User): void{
    this.users.splice(this.users.indexOf(user),1);
  }

}
