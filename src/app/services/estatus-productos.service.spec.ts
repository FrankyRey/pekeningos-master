import { TestBed } from '@angular/core/testing';

import { EstatusProductosService } from './estatus-productos.service';

describe('EstatusProductosService', () => {
  let service: EstatusProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatusProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});