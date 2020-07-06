import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickGigsComponent } from './quick-gigs.component';

describe('QuickGigsComponent', () => {
  let component: QuickGigsComponent;
  let fixture: ComponentFixture<QuickGigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickGigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
