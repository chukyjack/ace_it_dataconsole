import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroSixComponent } from './intro-six.component';

describe('IntroSixComponent', () => {
  let component: IntroSixComponent;
  let fixture: ComponentFixture<IntroSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
