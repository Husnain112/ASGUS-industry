import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review7Component } from './review7.component';

describe('Review7Component', () => {
  let component: Review7Component;
  let fixture: ComponentFixture<Review7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review7Component]
    });
    fixture = TestBed.createComponent(Review7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
