import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentspageComponent } from './studentspage.component';

describe('StudentspageComponent', () => {
  let component: StudentspageComponent;
  let fixture: ComponentFixture<StudentspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
