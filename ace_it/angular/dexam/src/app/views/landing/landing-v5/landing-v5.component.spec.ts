import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV5Component } from './landing-v5.component';

describe('LandingV5Component', () => {
  let component: LandingV5Component;
  let fixture: ComponentFixture<LandingV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
