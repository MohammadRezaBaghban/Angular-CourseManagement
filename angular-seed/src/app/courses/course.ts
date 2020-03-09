import { User } from '../user';

export class Course {
    id: number;
    name: string;
    teachers: User[];
    //students: User[];
    //profiles: Profiler;
    
    constructor(id: number, name: string, teachers: User[]) {
        this.id = id;
        this.name = name;
        this.teachers = teachers;
    }
}