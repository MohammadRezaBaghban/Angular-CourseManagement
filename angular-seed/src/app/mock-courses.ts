import { Course } from './courses/course';
import { User } from './user';

export const COURSES: Course[] = [
  new Course(1, 'WEB2', [new User (100,'teacher','Mario','Cruiser','20-05-1980'), new User (102,'teacher','Brock','Lee','20-05-1980')]),
  new Course(2, 'CSB', [new User (100,'teacher','Mario','Cruiser','20-05-1980')]),
  new Course(3, 'UX', [new User (100,'teacher','Mario','Cruiser','20-05-1980'), new User (102,'teacher','Brock','Lee','20-05-1980')]),
  new Course(4, 'OOD', [new User (100,'teacher','Mario','Cruiser','20-05-1980')])
];