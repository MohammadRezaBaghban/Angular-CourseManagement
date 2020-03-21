import { Course } from './courses/course';
import { User } from './user';
import { Profile } from './profile/Dependencies/profile';

export const COURSES: Course[] = [
  new Course(1, 'WEB2', [new User (100,'teacher','Mario','Cruiser','20-05-1980'), new User (102,'teacher','Brock','Lee','20-05-1980')], [new Profile('Software Engineering', 'S', new User(101, 'CourseOwner', "Mike", "Nebreska", '14-11-1985')), new Profile('Embedded Systems', 'T', new User(103, 'CourseOwner', "Jason", "Kaas", '14-11-1985'))]),
  new Course(2, 'CSB', [new User (100,'teacher','Mario','Cruiser','20-05-1980')], [new Profile('Embedded Systems', 'T', new User(103, 'CourseOwner', "Jason", "Kaas", '14-11-1985')), new Profile('Media Design', 'M', new User(102, 'CourseOwner', "Adam", "Bert", '15-11-1985'))]),
  new Course(3, 'UX', [new User (100,'teacher','Mario','Cruiser','20-05-1980'), new User (102,'teacher','Brock','Lee','20-05-1980')], [new Profile('Media Design', 'M', new User(102, 'CourseOwner', "Adam", "Bert", '15-11-1985')), new Profile('IT', 'B', new User(104, 'CourseOwner', "Ruud", "Tiger", '14-11-1985'))]),
  new Course(4, 'OOD', [new User (100,'teacher','Mario','Cruiser','20-05-1980')], [new Profile('Software Engineering', 'S', new User(101, 'CourseOwner', "Mike", "Nebreska", '14-11-1985')), new Profile('Embedded Systems', 'T', new User(103, 'CourseOwner', "Jason", "Kaas", '14-11-1985'))])
];