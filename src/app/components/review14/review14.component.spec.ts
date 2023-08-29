import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review14Component } from './review14.component';

describe('Review14Component', () => {
  let component: Review14Component;
  let fixture: ComponentFixture<Review14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review14Component]
    });
    fixture = TestBed.createComponent(Review14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
