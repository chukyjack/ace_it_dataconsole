import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV8Component } from './landing-v8.component';

describe('LandingV8Component', () => {
  let component: LandingV8Component;
  let fixture: ComponentFixture<LandingV8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
