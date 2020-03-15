import { Profile } from './profile';
import { User } from 'src/app/user';

export let Profiles: Array<Profile> = [
    new Profile('Software Engineering', 'S', new User(101, 'CourseOwner', "Mike", "Nebreska", '14-11-1985')),
    new Profile('Media Design', 'M', new User(102, 'CourseOwner', "Adam", "Bert", '15-11-1985')),
    new Profile('Embedded Systems', 'T', new User(103, 'CourseOwner', "Jason", "Kaas", '14-11-1985')),
    new Profile('IT', 'B', new User(104, 'CourseOwner', "Ruud", "Tiger", '14-11-1985')),




];