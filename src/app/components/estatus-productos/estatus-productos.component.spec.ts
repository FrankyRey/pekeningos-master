import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatusProductosComponent } from './estatus-productos.component';

describe('EstatusProductosComponent', () => {
  let component: EstatusProductosComponent;
  let fixture: ComponentFixture<EstatusProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatusProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatusProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});