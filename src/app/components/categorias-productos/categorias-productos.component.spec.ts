import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasProductosComponent } from './categorias-productos.component';

describe('CategoriasProductosComponent', () => {
  let component: CategoriasProductosComponent;
  let fixture: ComponentFixture<CategoriasProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
