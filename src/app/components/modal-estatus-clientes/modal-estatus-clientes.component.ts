import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusClientesService } from '../../services/estatus-clientes.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusCliente } from '../../models/estatus-cliente';

@Component({
  selector: 'app-modal-estatus-clientes',
  templateUrl: './modal-estatus-clientes.component.html',
  styleUrls: ['./modal-estatus-clientes.component.css'],
  providers: [ EstatusClientesService, FosUserService ]
})
export class ModalEstatusClientesComponent implements OnInit {

  @Input() boton: string;
  @Input() title: string;
  @Input() token;
  @Input() identity;
  @Input() estatusCliente: EstatusCliente;
  public status: string;

  constructor(
    private _estatusClientesService: EstatusClientesService,
    private _fosUserService: FosUserService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  saveEdit() {
    if(this.boton == 'Guardar') {
      this._estatusClientesService.store(this.estatusCliente, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusCliente = response.estatusCliente;
            console.log(this.estatusCliente);
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
      this._estatusClientesService.update(this.estatusCliente, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.estatusCliente = response.estatusCliente;
            console.log(this.estatusCliente);
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
