import { TestBed } from '@angular/core/testing';

import { CategoriasProductosService } from './categorias-productos.service';

describe('CategoriasProductosService', () => {
  let service: CategoriasProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriasProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
