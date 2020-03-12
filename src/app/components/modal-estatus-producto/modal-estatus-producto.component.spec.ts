import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstatusProductoComponent } from './modal-estatus-producto.component';

describe('ModalEstatusProductoComponent', () => {
  let component: ModalEstatusProductoComponent;
  let fixture: ComponentFixture<ModalEstatusProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEstatusProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEstatusProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
