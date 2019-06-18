import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationSystemsComponent } from './automation-systems.component';

describe('AutomationSystemsComponent', () => {
  let component: AutomationSystemsComponent;
  let fixture: ComponentFixture<AutomationSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
