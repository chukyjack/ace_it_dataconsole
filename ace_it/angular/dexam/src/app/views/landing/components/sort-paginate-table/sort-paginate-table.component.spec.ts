import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortPaginateTableComponent } from './sort-paginate-table.component';

describe('SortPaginateTableComponent', () => {
  let component: SortPaginateTableComponent;
  let fixture: ComponentFixture<SortPaginateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortPaginateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortPaginateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
