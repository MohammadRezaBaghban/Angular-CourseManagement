import { Component, OnInit } from '@angular/core';
import { Role } from '../role';
import { ROLES } from '../roles';
import { RoleServiceService } from '../role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Role[];
  selectedRole: Role;

  constructor(private roleService: RoleServiceService) {
  }

  getHeros(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }

  onSelect(role: Role): void {
    this.selectedRole = role;
  }

  onDelete(role: Role): void {
    this.roles.splice(this.roles.indexOf(role), 1);
  }

  AddRole(roleName: string, roleId: number): void {
    if (!this.roles.find(role => role.Id === roleId) && !this.roles.find(role => role.RoleName === roleName)) {
      this.roles.push(new Role(roleId, roleName));
    } else {
      alert("There is another role with the same name or id");
    }
  }

  clearSelectedRole() {
    this.selectedRole = null;
  }


  ngOnInit(): void {
    this.getHeros();
  }

}
