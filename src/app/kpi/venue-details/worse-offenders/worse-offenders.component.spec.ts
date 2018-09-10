import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorseOffendersComponent } from './worse-offenders.component';

describe('WorseOffendersComponent', () => {
  let component: WorseOffendersComponent;
  let fixture: ComponentFixture<WorseOffendersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorseOffendersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorseOffendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
