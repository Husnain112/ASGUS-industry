import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review6Component } from './review6.component';

describe('Review6Component', () => {
  let component: Review6Component;
  let fixture: ComponentFixture<Review6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review6Component]
    });
    fixture = TestBed.createComponent(Review6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
