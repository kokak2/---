import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P312Component } from './p312.component';

describe('P312Component', () => {
  let component: P312Component;
  let fixture: ComponentFixture<P312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
