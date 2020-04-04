import { TestBed } from '@angular/core/testing';

import { ProfileCourseService } from './profile-course.service';

describe('ProfileCourseService', () => {
  let service: ProfileCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
