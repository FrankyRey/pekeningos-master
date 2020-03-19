import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusClientesService } from '../../services/estatus-clientes.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusCliente } from '../../models/estatus-cliente';
import { ModalEstatusClientesComponent } from '../modal-estatus-clientes/modal-estatus-clientes.component';

@Component({
  selector: 'app-estatus-clientes',
  templateUrl: './estatus-clientes.component.html',
  styleUrls: ['./estatus-clientes.component.css'],
  providers: [ EstatusClientesService, FosUserService ]
})
export class EstatusClientesComponent implements OnInit {
	
	public status: string;
  public identity;
	public token;
  public estatusCliente: EstatusCliente;
  public estatusClientes: Array<EstatusCliente>;

  	constructor(
    	private _estatusClientesService: EstatusClientesService,
    	private _fosUserService: FosUserService,
      private _modalService: NgbModal,
  	) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.estatusCliente = new EstatusCliente(1,'');
  	}

  	ngOnInit(): void {
  		this._estatusClientesService.index().subscribe(
      		response => {
        		if( response.status == 'success' ) {
          			this.estatusClientes = response.estatusClientes;
          			console.log(this.estatusClientes);
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
	  
  new( action, indice = null) {
		if( action == "save" ) {
      const modalRef = this._modalService.open(ModalEstatusClientesComponent);
	  	modalRef.componentInstance.boton = 'Guardar';
	  	modalRef.componentInstance.title = 'Agregar Nuevo Estatus';
	  	modalRef.componentInstance.token = this.token;
			modalRef.componentInstance.identity = this.identity;
		  modalRef.componentInstance.estatusCliente = this.estatusCliente;
		} else {
			const modalRef = this._modalService.open(ModalEstatusClientesComponent);
	  	modalRef.componentInstance.boton = 'Actualizar';
	  	modalRef.componentInstance.title = 'Actualizar Estatus';
			modalRef.componentInstance.token = this.token;
	  	modalRef.componentInstance.identity = this.identity;
			modalRef.componentInstance.estatusCliente = this.estatusClientes[indice];
		}	
  }

}