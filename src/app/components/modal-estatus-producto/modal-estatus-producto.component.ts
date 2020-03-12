import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusProductosService } from '../../services/estatus-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusProducto } from '../../models/estatus-producto';

@Component({
  selector: 'app-modal-estatus-producto',
  templateUrl: './modal-estatus-producto.component.html',
  styleUrls: ['./modal-estatus-producto.component.css'],
  providers: [ EstatusProductosService, FosUserService ]
})
export class ModalEstatusProductoComponent implements OnInit {

  @Input() boton: string;
  @Input() title: string;
  @Input() token;
  @Input() identity;
  @Input() estatusProducto: EstatusProducto;
  public status: string;

  constructor(
    private _estatusProductosService: EstatusProductosService,
    private _fosUserService: FosUserService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  saveEdit() {
    if(this.boton == 'Guardar') {
      this._estatusProductosService.store(this.estatusProducto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusProducto = response.estatusProducto;
            console.log(this.estatusProducto);
            this.activeModal.close();
          } else {
            console.log('Sin datos recuperados');
          }
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
        }
      );
    } else {
      this._estatusProductosService.update(this.estatusProducto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusProducto = response.estatusProducto;
            console.log(this.estatusProducto);
            this.activeModal.close();
          } else {
            console.log('Sin datos recuperados');
          }
        },
        error => {
          this.status = 'error';
          console.log(<any>error);
        }
      );
    }
  }

}
