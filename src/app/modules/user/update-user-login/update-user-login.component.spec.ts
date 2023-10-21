import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserLoginComponent } from './update-user-login.component';

describe('UpdateUserLoginComponent', () => {
  let component: UpdateUserLoginComponent;
  let fixture: ComponentFixture<UpdateUserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserLoginComponent]
    });
    fixture = TestBed.createComponent(UpdateUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
