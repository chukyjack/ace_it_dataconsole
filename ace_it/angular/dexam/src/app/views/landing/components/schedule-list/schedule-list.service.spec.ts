import { TestBed } from '@angular/core/testing';

import { ScheduleListService } from './schedule-list.service';

describe('ScheduleListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleListService = TestBed.get(ScheduleListService);
    expect(service).toBeTruthy();
  });
});
