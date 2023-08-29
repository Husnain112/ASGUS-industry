import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review8Component } from './review8.component';

describe('Review8Component', () => {
  let component: Review8Component;
  let fixture: ComponentFixture<Review8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review8Component]
    });
    fixture = TestBed.createComponent(Review8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
