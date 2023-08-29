import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review13Component } from './review13.component';

describe('Review13Component', () => {
  let component: Review13Component;
  let fixture: ComponentFixture<Review13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review13Component]
    });
    fixture = TestBed.createComponent(Review13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
