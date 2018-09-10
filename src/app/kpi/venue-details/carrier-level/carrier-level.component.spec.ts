import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierLevelComponent } from './carrier-level.component';

describe('CarrierLevelComponent', () => {
  let component: CarrierLevelComponent;
  let fixture: ComponentFixture<CarrierLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
