import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDiningComponent } from './admin-dining.component';

describe('AdminDiningComponent', () => {
  let component: AdminDiningComponent;
  let fixture: ComponentFixture<AdminDiningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDiningComponent]
    });
    fixture = TestBed.createComponent(AdminDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
