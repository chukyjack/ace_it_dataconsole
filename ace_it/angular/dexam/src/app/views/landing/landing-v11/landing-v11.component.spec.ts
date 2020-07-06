import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV11Component } from './landing-v11.component';

describe('LandingV11Component', () => {
  let component: LandingV11Component;
  let fixture: ComponentFixture<LandingV11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
