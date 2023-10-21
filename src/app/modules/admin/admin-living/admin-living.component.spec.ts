import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivingComponent } from './admin-living.component';

describe('AdminLivingComponent', () => {
  let component: AdminLivingComponent;
  let fixture: ComponentFixture<AdminLivingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLivingComponent]
    });
    fixture = TestBed.createComponent(AdminLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
