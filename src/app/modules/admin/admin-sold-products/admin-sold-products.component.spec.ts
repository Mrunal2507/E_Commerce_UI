import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSoldProductsComponent } from './admin-sold-products.component';

describe('AdminSoldProductsComponent', () => {
  let component: AdminSoldProductsComponent;
  let fixture: ComponentFixture<AdminSoldProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSoldProductsComponent]
    });
    fixture = TestBed.createComponent(AdminSoldProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
