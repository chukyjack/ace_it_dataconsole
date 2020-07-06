import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV6Component } from './landing-v6.component';

describe('LandingV6Component', () => {
  let component: LandingV6Component;
  let fixture: ComponentFixture<LandingV6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
