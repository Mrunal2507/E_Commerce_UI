import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroonComponent } from './bedroon.component';

describe('BedroonComponent', () => {
  let component: BedroonComponent;
  let fixture: ComponentFixture<BedroonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BedroonComponent]
    });
    fixture = TestBed.createComponent(BedroonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
