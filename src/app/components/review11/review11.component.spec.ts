import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Review11Component } from './review11.component';

describe('Review11Component', () => {
  let component: Review11Component;
  let fixture: ComponentFixture<Review11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Review11Component]
    });
    fixture = TestBed.createComponent(Review11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
