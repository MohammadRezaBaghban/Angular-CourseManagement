import { Profile } from '../profile';
import { User } from 'src/app/Modules/user';
import {Role} from '../role';
import { Employee } from '../employee';

export let Profiles: Array<Profile> = [
    new Profile('Software Engineering', 'S', new User(101, new Employee(4, 'CourseOwner', "", 1.2), "Mike", "Nebreska", '14-11-1985')),
    new Profile('Embedded Systems', 'T', new User(103, new Employee(4, 'CourseOwner', "", 1.2), "Jason", "Kaas", '14-11-1985')),
    new Profile('Media Design', 'M', new User(102, new Employee(4, 'CourseOwner', "",1.2), "Adam", "Bert", '15-11-1985')),
    new Profile('IT', 'B', new User(104, new Employee(4, 'CourseOwner', "",1.2), "Ruud", "Tiger", '14-11-1985')),




];