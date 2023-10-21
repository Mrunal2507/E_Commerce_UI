import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoginComponent } from './update-login.component';

describe('UpdateLoginComponent', () => {
  let component: UpdateLoginComponent;
  let fixture: ComponentFixture<UpdateLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLoginComponent]
    });
    fixture = TestBed.createComponent(UpdateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
