import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoletosComponent } from './modal-boletos.component';

describe('ModalBoletosComponent', () => {
  let component: ModalBoletosComponent;
  let fixture: ComponentFixture<ModalBoletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBoletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
