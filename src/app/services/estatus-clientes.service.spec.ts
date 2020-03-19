import { TestBed } from '@angular/core/testing';

import { EstatusClientesService } from './estatus-clientes.service';

describe('EstatusClientesService', () => {
  let service: EstatusClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatusClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
