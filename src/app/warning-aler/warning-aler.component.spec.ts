import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningAlerComponent } from './warning-aler.component';

describe('WarningAlerComponent', () => {
  let component: WarningAlerComponent;
  let fixture: ComponentFixture<WarningAlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningAlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningAlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
