import { Course } from 'src/app/courses/course';
import { Employee } from 'src/app/role/Dependencies/employee';

export class Profile {

    readonly profileName: string;
    readonly profileAbbreviation: string;
    private containingCourse: Array<Course>;
    private profileOwner: Employee;


    constructor(name: string, abbreviation: string, owner: Employee) {
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