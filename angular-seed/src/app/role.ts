export class Role {
    Id: number;
    RoleName: string;
    FTE: number = 0;

    constructor(id: number, roleName: string, ) {
        this.Id = id;
        this.RoleName = roleName;
    }
}