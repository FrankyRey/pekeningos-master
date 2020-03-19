import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstatusClientesComponent } from './modal-estatus-clientes.component';

describe('ModalEstatusClientesComponent', () => {
  let component: ModalEstatusClientesComponent;
  let fixture: ComponentFixture<ModalEstatusClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstatusClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstatusClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
