import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'WEB2' },
      { id: 12, name: 'CSB' },
      { id: 13, name: 'UX' },
      { id: 14, name: 'OOD' },
      { id: 15, name: 'PCS3' },
      { id: 16, name: 'PCS4' },
      { id: 17, name: 'EDB3' },
      { id: 18, name: 'WEB1' },
      { id: 19, name: 'MATH3' },
      { id: 20, name: 'EDB4' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(courses: Course[]): number {
    return courses.length > 0 ? Math.max(...courses.map(hero => hero.id)) + 1 : 11;
  }
}