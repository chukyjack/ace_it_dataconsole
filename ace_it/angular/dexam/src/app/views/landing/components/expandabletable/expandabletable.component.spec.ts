import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandabletableComponent } from './expandabletable.component';

describe('ExpandabletableComponent', () => {
  let component: ExpandabletableComponent;
  let fixture: ComponentFixture<ExpandabletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandabletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandabletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
