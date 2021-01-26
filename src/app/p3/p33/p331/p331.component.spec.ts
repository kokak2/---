import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P331Component } from './p331.component';

describe('P331Component', () => {
  let component: P331Component;
  let fixture: ComponentFixture<P331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
