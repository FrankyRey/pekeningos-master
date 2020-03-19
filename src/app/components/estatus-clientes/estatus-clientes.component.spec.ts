import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusClientesComponent } from './estatus-clientes.component';

describe('EstatusClientesComponent', () => {
  let component: EstatusClientesComponent;
  let fixture: ComponentFixture<EstatusClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
