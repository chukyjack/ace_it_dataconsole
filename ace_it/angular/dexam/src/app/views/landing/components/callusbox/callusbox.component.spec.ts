import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallusboxComponent } from './callusbox.component';

describe('CallusboxComponent', () => {
  let component: CallusboxComponent;
  let fixture: ComponentFixture<CallusboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallusboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallusboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
