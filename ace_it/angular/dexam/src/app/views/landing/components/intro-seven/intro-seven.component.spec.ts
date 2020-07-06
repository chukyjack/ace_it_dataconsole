import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSevenComponent } from './intro-seven.component';

describe('IntroSevenComponent', () => {
  let component: IntroSevenComponent;
  let fixture: ComponentFixture<IntroSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
