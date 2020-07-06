import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSessionListComponent } from './upcoming-session-list.component';

describe('UpcomingSessionListComponent', () => {
  let component: UpcomingSessionListComponent;
  let fixture: ComponentFixture<UpcomingSessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
