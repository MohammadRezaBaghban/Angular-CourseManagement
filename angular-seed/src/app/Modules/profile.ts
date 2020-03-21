import { Course } from 'src/app/Modules/course';
import { Employee } from 'src/app/Modules/employee';
import { User } from 'src/app/Modules/user';

export class Profile {

    profileName: string;
    profileAbbreviation: string;
    containingCourse: Array<Course> = [];
    profileOwner: User;


    constructor(name: string, abbreviation: string, owner: User) {
        this.profileName = name;
        this.profileAbbreviation = abbreviation;
        this.profileOwner = owner;

    }

    public ContainCourse(course: Course): boolean {
        return this.containingCourse.includes(course);
    }

    public AddCourse(course: Course): boolean {

        if (!this.ContainCourse(course)) {
            this.containingCourse.push(course);
            return true;
        }
        else {
            return false;
        }
    }

}