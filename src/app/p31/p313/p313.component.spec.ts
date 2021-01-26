import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P313Component } from './p313.component';

describe('P313Component', () => {
  let component: P313Component;
  let fixture: ComponentFixture<P313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
