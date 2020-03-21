import { User } from './user';
import { Profile } from './profile';

export class Course {
    id: number;
    name: string;
    teachers: User[];
    //students: User[];
    profiles: Profile[];

    constructor(id: number, name: string, teachers: User[], profiles: Profile[]) {
        this.id = id;
        this.name = name;
        this.teachers = teachers;
        this.profiles = profiles;
    }
}