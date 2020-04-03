import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusOrdenesService } from '../../services/estatus-ordenes.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusOrden } from '../../models/estatus-orden';

@Component({
  selector: 'app-modal-estatus-ordenes',
  templateUrl: './modal-estatus-ordenes.component.html',
  styleUrls: ['./modal-estatus-ordenes.component.css'],
  providers: [ EstatusOrdenesService, FosUserService ]
})
export class ModalEstatusOrdenesComponent implements OnInit {

  @Input() boton: string;
  @Input() title: string;
  @Input() token;
  @Input() identity;
  @Input() estatusOrden: EstatusOrden;
  public status: string;

  constructor(
    private _estatusOrdenesService: EstatusOrdenesService,
    private _fosUserService: FosUserService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  saveEdit() {
    if(this.boton == 'Guardar') {
      this._estatusOrdenesService.store(this.estatusOrden, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusOrden = response.estatusOrden;
            console.log(this.estatusOrden);
            this.activeModal.close("success");
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
      this._estatusOrdenesService.update(this.estatusOrden, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusOrden = response.estatusOrden;
            console.log(this.estatusOrden);
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
