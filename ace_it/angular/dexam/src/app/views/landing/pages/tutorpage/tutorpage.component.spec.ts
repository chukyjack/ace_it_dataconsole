import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorpageComponent } from './tutorpage.component';

describe('TutorpageComponent', () => {
  let component: TutorpageComponent;
  let fixture: ComponentFixture<TutorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
