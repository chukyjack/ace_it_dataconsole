import { TestBed } from '@angular/core/testing';

import { StudentListService } from './student-list.service';

describe('StudentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentListService = TestBed.get(StudentListService);
    expect(service).toBeTruthy();
  });
});
