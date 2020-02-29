import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { ROLES } from '../roles';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles = ROLES;
  selectedRole: Role;

  onSelect(role: Role): void {

    this.selectedRole = role;

  }

  constructor() { }
  ngOnInit(): void {
  }

}
