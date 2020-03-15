import { Profile } from './profile';
import { User } from 'src/app/user';

export let Profiles: Array<Profile> = [
    new Profile('Software Engineering', 'S', new User(101, 'CourseOwner', "M", "N", '14-11-1985')),
    new Profile('Media Design', 'M', new User(102, 'CourseOwner', "A", "B", '15-11-1985')),
    new Profile('Embedded Systems', 'T', new User(103, 'CourseOwner', "J", "K", '14-11-1985')),
    new Profile('IT', 'B', new User(104, 'CourseOwner', "R", "T", '14-11-1985')),




];