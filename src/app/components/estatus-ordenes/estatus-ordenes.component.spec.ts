import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusOrdenesComponent } from './estatus-ordenes.component';

describe('EstatusOrdenesComponent', () => {
  let component: EstatusOrdenesComponent;
  let fixture: ComponentFixture<EstatusOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
