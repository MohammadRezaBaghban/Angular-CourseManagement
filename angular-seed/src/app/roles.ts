import { Role } from './role'
import { Employee } from './employee';

export let ROLES: Array<Role> = [
    new Employee(1, 'Teacher', 1),
    new Role(2, 'Student'),
    new Employee(3, 'Mentor', 0.5),
    new Employee(4, 'CourseOwner', 1.2),
    new Employee(5, 'Administration', 1.5),
];