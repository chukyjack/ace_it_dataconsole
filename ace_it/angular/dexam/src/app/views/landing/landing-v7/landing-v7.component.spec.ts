import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingV7Component } from './landing-v7.component';

describe('LandingV7Component', () => {
  let component: LandingV7Component;
  let fixture: ComponentFixture<LandingV7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingV7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingV7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
