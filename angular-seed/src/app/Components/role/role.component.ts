import { Component, OnInit, } from '@angular/core';
import { Role } from '../../Modules/role';
import { RoleServiceService } from '../../Modules/Services/role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roles: Array<Role>;
  selectedRole: Role;

  constructor(private roleService: RoleServiceService) {
  }


  getHeros(): void {
    this.roleService.getRoles().subscribe(roles => this.roles = roles);
  }

  onSelect(role: Role): void {
    if (this.selectedRole === role) {
      this.selectedRole = null;
    } else {
      this.selectedRole = role;
    }
  }

  search(term: string): void {
    if (term.length != 0) {
      this.roles = this.roles.filter(
        role => role.RoleName.toUpperCase().startsWith(term.toUpperCase()));
    }
    else {
      this.getHeros();
    }
  }


  AddRole(roleName: string, roleId: number): void {
    if (!this.roles.find(role => role.Id === roleId) && !this.roles.find(role => role.RoleName === roleName)) {
      this.roles.push(new Role(roleId, roleName));
    } else {
      alert("There is another role with the same name or id");
    }
  }




  ngOnInit(): void {
    this.getHeros();
  }

}
