import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroFiveComponent } from './intro-five.component';

describe('IntroFiveComponent', () => {
  let component: IntroFiveComponent;
  let fixture: ComponentFixture<IntroFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
