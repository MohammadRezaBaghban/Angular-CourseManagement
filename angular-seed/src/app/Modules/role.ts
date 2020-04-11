export class Role {
    Id: number;
    RoleName: string;
    Description:string;
    FTE: number = 0;

    constructor(id: number, roleName: string, des:string,fte:number) {
        this.Id = id;
        this.RoleName = roleName;
        this.Description = des;
        this.FTE = fte;
    }
}

export interface RoleInterface{
    id:number;
    name:string;
    des:string;
    fte:number;
}