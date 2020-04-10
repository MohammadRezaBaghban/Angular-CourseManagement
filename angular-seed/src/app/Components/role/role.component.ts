import { Component, OnInit, Input, } from '@angular/core';
import { Role } from '../../Modules/role';
import { RoleServiceService } from '../../Modules/Services/role-service.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  @Input() roles: Array<Role>;
  @Input() selectedRole: Role;

  constructor(private roleService: RoleServiceService) {
  }


  getRoles(): void {
    this.roleService.GetRoles().subscribe(roles => this.roles = roles);
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
      this.getRoles();
    }
  }

  AddRole(roleName: string, roleDescription:string ,roleFTE: number): void {
    let newRole: Role = new Role(null,roleName, roleDescription,roleFTE);
    this.roleService.AddRole(newRole).subscribe(()=>this.getRoles());
  }


  ngOnInit(): void {
    this.getRoles();
  }

}
