import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P332Component } from './p332.component';

describe('P332Component', () => {
  let component: P332Component;
  let fixture: ComponentFixture<P332Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P332Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
