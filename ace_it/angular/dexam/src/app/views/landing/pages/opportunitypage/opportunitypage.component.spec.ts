import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitypageComponent } from './opportunitypage.component';

describe('OpportunitypageComponent', () => {
  let component: OpportunitypageComponent;
  let fixture: ComponentFixture<OpportunitypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunitypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunitypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
