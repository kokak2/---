import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P314Component } from './p314.component';

describe('P314Component', () => {
  let component: P314Component;
  let fixture: ComponentFixture<P314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
