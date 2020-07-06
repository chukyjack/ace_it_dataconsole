import { TestBed } from '@angular/core/testing';

import { SortPaginateTableService } from './sort-paginate-table.service';

describe('SortPaginateTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortPaginateTableService = TestBed.get(SortPaginateTableService);
    expect(service).toBeTruthy();
  });
});
