import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAlimentosComponent } from './pago-alimentos.component';

describe('PagoAlimentosComponent', () => {
  let component: PagoAlimentosComponent;
  let fixture: ComponentFixture<PagoAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
