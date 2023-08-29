import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review10Component } from './review10.component';

describe('Review10Component', () => {
  let component: Review10Component;
  let fixture: ComponentFixture<Review10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review10Component]
    });
    fixture = TestBed.createComponent(Review10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
