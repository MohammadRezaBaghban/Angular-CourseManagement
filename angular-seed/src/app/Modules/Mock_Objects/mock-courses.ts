import { Course } from '../course';
import { User } from '../user';
import { Profile } from '../profile';
import { Employee } from '../employee';

export const COURSES: Course[] = [
  new Course(1, 'WEB2', [new User(1,new Employee(1, 'Teacher', 1) , 'Mario ', 'Cruiser', '20-05-1980'), new User(9, new Employee(1, 'Teacher', 1), 'Brock ', 'Lee', '14-11-1985')], [new Profile('Software Engineering', 'S', new User(101, new Employee(4, 'CourseOwner', 1.2), "Mike", "Nebreska", '14-11-1985')), new Profile('Embedded Systems', 'T', new User(103, new Employee(4, 'CourseOwner', 1.2), "Jason", "Kaas", '14-11-1985'))]),
  new Course(2, 'CSB', [new User(1,new Employee(1, 'Teacher', 1) , 'Mario ', 'Cruiser', '20-05-1980')], [new Profile('Embedded Systems', 'T', new User(103, new Employee(4, 'CourseOwner', 1.2), "Jason", "Kaas", '14-11-1985')), new Profile('Media Design', 'M', new User(102, new Employee(4, 'CourseOwner', 1.2), "Adam", "Bert", '15-11-1985'))]),
  new Course(3, 'UX', [new User(1,new Employee(1, 'Teacher', 1) , 'Mario ', 'Cruiser', '20-05-1980'), new User(9, new Employee(1, 'Teacher', 1), 'Brock ', 'Lee', '14-11-1985')], [new Profile('Media Design', 'M', new User(102, new Employee(4, 'CourseOwner', 1.2), "Adam", "Bert", '15-11-1985')), new Profile('IT', 'B', new User(104, new Employee(4, 'CourseOwner', 1.2), "Ruud", "Tiger", '14-11-1985'))]),
  new Course(4, 'OOD', [new User(1,new Employee(1, 'Teacher', 1) , 'Mario ', 'Cruiser', '20-05-1980')], [new Profile('Software Engineering', 'S', new User(101, new Employee(4, 'CourseOwner', 1.2), "Mike", "Nebreska", '14-11-1985')), new Profile('Embedded Systems', 'T', new User(103, new Employee(4, 'CourseOwner', 1.2), "Jason", "Kaas", '14-11-1985'))])
];