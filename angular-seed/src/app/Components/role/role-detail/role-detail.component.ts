import { Component, OnInit, Input } from '@angular/core';
import { Role } from 'src/app/Modules/role';
import { RoleService } from '../../../Modules/Services/role-service.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  @Input() selectedRole: Role;
  @Input() roles: Array<Role>;

  constructor(private roleService: RoleService) { }


  onDelete(role: Role): void {
    this.roles.splice(this.roles.indexOf(role),1);
    this.selectedRole = null;
  }

  clearSelectedRole() {
    this.selectedRole = null;
  }

  updateRole(selectedRole: Role):void{
    this.roleService.UpdateRole(selectedRole).subscribe(() => this.clearSelectedRole());
  }

  deleteRole(role:Role):void{
    this.roleService.DeleteRole(role).subscribe(()=>this.onDelete(role));
  }

  ngOnInit(): void {
  }

}
