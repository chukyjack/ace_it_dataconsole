import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroThreeComponent } from './intro-three.component';

describe('IntroThreeComponent', () => {
  let component: IntroThreeComponent;
  let fixture: ComponentFixture<IntroThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
