import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCauroselComponent } from './testimonial-caurosel.component';

describe('TestimonialCauroselComponent', () => {
  let component: TestimonialCauroselComponent;
  let fixture: ComponentFixture<TestimonialCauroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialCauroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialCauroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
