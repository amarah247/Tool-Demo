import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneLevelComponent } from './zone-level.component';

describe('ZoneLevelComponent', () => {
  let component: ZoneLevelComponent;
  let fixture: ComponentFixture<ZoneLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
