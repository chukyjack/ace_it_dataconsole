import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNineComponent } from './intro-nine.component';

describe('IntroNineComponent', () => {
  let component: IntroNineComponent;
  let fixture: ComponentFixture<IntroNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
