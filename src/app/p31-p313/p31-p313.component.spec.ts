import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P31P313Component } from './p31-p313.component';

describe('P31P313Component', () => {
  let component: P31P313Component;
  let fixture: ComponentFixture<P31P313Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P31P313Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P31P313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
