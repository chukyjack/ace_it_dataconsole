import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroElevenComponent } from './intro-eleven.component';

describe('IntroElevenComponent', () => {
  let component: IntroElevenComponent;
  let fixture: ComponentFixture<IntroElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
