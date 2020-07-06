import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBox2Component } from './contact-box2.component';

describe('ContactBox2Component', () => {
  let component: ContactBox2Component;
  let fixture: ComponentFixture<ContactBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
