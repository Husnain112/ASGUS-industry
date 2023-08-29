import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review12Component } from './review12.component';

describe('Review12Component', () => {
  let component: Review12Component;
  let fixture: ComponentFixture<Review12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review12Component]
    });
    fixture = TestBed.createComponent(Review12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
