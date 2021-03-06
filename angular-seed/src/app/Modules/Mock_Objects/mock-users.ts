import { User } from '../user';
import { Role } from '../role';
import { Employee } from '../employee';

export const USERS: User[] = [
  new User(1,new Employee(1, 'Teacher', "",1) , 'Mario ', 'Cruiser', '20-05-1980'),
  new User(2, new Role(2, 'Student',"",0), 'Paul ', 'Molive', '23-08-2000'),
  new User(3, new Employee(3, 'Mentor', "",0.5), 'Anna ', 'Mull', '01-01-1960'),
  new User(4, new Employee(4, 'CourseOwner',"", 1.2), 'Paige ', 'Turner', '15-03-1950'),
  new User(5, new Employee(5, 'Administration', "",1.5), 'Bob ', 'Frapples', '09-12-1970'),
  new User(6, new Role(2, 'Student',"",0), 'Walter ', 'Melon', '17-01-1999'),
  new User(7, new Role(2, 'Student',"",0), 'Barb ', 'Ackue', '19-04-1998'),
  new User(8, new Role(2, 'Student',"",0), 'Greta', 'Life', '28-10-2000'),
  new User(9, new Employee(1, 'Teacher',"", 1), 'Brock ', 'Lee', '14-11-1985'),
  new User(10, new Role(2, 'Student',"",0), 'Monty ', 'Carlo', '08-02-2000')
];