import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/Modules/role';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  @Input() selectedRole: Role;
  @Input() roles: Array<Role>;

  constructor() { }


  onDelete(role: Role): void {
    this.roles.splice(this.roles.indexOf(role), 1);
    this.selectedRole = null;
  }

  clearSelectedRole() {
    this.selectedRole = null;
  }

  ngOnInit(): void {
  }

}
