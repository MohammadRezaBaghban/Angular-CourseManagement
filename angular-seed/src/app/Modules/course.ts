import { User } from './user';
import { Profile } from './profile';

export class Course {
    id: number;
    name: string;
    des: string;
    teachers: User[];
    //students: User[];
    profiles: Profile[];

    constructor(id: number, name: string, description: string, teachers: User[], profiles: Profile[]) {
        this.id = id;
        this.name = name;
        this.des = description;
        this.teachers = teachers;
        this.profiles = profiles;
    }
}

export interface CourseInterface {
    id: number;
    name: string;
    des: string;
    teachers: User[];
}