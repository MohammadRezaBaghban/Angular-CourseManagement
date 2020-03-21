import { User } from '../users/Dependencies/user';
import { Profile } from '../profile/Dependencies/profile';

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