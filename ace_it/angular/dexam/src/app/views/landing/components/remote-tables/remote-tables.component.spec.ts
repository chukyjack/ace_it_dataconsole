import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteTablesComponent } from './remote-tables.component';

describe('RemoteTablesComponent', () => {
  let component: RemoteTablesComponent;
  let fixture: ComponentFixture<RemoteTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
