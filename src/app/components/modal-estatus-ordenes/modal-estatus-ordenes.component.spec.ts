import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstatusOrdenesComponent } from './modal-estatus-ordenes.component';

describe('ModalEstatusOrdenesComponent', () => {
  let component: ModalEstatusOrdenesComponent;
  let fixture: ComponentFixture<ModalEstatusOrdenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstatusOrdenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstatusOrdenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
