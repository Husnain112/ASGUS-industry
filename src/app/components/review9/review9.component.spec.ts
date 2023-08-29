import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review9Component } from './review9.component';

describe('Review9Component', () => {
  let component: Review9Component;
  let fixture: ComponentFixture<Review9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review9Component]
    });
    fixture = TestBed.createComponent(Review9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
