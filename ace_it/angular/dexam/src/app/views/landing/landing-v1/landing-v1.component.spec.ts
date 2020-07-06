import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV1Component } from './landing-v1.component';

describe('LandingV1Component', () => {
  let component: LandingV1Component;
  let fixture: ComponentFixture<LandingV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
