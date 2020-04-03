import { TestBed } from '@angular/core/testing';

import { EstatusOrdenesService } from './estatus-ordenes.service';

describe('EstatusOrdenesService', () => {
  let service: EstatusOrdenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatusOrdenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
