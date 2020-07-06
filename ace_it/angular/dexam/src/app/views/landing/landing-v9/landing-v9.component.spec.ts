import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV9Component } from './landing-v9.component';

describe('LandingV9Component', () => {
  let component: LandingV9Component;
  let fixture: ComponentFixture<LandingV9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
