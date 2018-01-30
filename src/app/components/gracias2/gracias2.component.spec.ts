import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gracias2Component } from './gracias2.component';

describe('Gracias2Component', () => {
  let component: Gracias2Component;
  let fixture: ComponentFixture<Gracias2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gracias2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gracias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
