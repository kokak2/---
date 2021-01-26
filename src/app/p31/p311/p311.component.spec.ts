import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P311Component } from './p311.component';

describe('P311Component', () => {
  let component: P311Component;
  let fixture: ComponentFixture<P311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
