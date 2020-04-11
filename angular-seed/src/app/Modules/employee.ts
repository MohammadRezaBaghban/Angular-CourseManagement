import { Role } from './role';

export class Employee extends Role {

    FTE: number;

    constructor(id: number, roleName: string, des:string, fte: number = 1) {
        super(id, roleName,des,fte);
    }
}