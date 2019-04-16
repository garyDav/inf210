import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoratorsGenericsComponent } from './decorators-generics.component';

describe('DecoratorsGenericsComponent', () => {
  let component: DecoratorsGenericsComponent;
  let fixture: ComponentFixture<DecoratorsGenericsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoratorsGenericsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoratorsGenericsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
