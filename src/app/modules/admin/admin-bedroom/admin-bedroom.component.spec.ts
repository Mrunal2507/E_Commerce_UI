import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBedroomComponent } from './admin-bedroom.component';

describe('AdminBedroomComponent', () => {
  let component: AdminBedroomComponent;
  let fixture: ComponentFixture<AdminBedroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBedroomComponent]
    });
    fixture = TestBed.createComponent(AdminBedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
