import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServipagComponent } from './servipag.component';

describe('ServipagComponent', () => {
  let component: ServipagComponent;
  let fixture: ComponentFixture<ServipagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServipagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServipagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
