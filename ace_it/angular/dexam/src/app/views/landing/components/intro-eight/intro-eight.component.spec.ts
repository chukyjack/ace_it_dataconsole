import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroEightComponent } from './intro-eight.component';

describe('IntroEightComponent', () => {
  let component: IntroEightComponent;
  let fixture: ComponentFixture<IntroEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
