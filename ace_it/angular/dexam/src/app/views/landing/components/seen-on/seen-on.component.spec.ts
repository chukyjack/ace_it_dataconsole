import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenOnComponent } from './seen-on.component';

describe('SeenOnComponent', () => {
  let component: SeenOnComponent;
  let fixture: ComponentFixture<SeenOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeenOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
