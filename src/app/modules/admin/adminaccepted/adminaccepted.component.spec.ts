import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminacceptedComponent } from './adminaccepted.component';

describe('AdminacceptedComponent', () => {
  let component: AdminacceptedComponent;
  let fixture: ComponentFixture<AdminacceptedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminacceptedComponent]
    });
    fixture = TestBed.createComponent(AdminacceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
