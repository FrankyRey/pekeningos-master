import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusOrdenesService } from '../../services/estatus-ordenes.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusOrden } from '../../models/estatus-orden';
import { ModalEstatusOrdenesComponent } from '../modal-estatus-ordenes/modal-estatus-ordenes.component';

@Component({
  selector: 'app-estatus-ordenes',
  templateUrl: './estatus-ordenes.component.html',
  styleUrls: ['./estatus-ordenes.component.css'],
  providers: [ EstatusOrdenesService, FosUserService ]
})
export class EstatusOrdenesComponent implements OnInit {

    public status: string;
  	public identity;
  	public token;
  	public estatusOrden: EstatusOrden;
  	public estatusOrdenes: Array<EstatusOrden>;

  constructor(
    private _estatusOrdenesService: EstatusOrdenesService,
    	private _fosUserService: FosUserService,
      private _modalService: NgbModal,
  ) { 
    this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.estatusOrden = new EstatusOrden(1,'');
  }

  ngOnInit(): void {
    this.index();
  }

  index() {
		this._estatusOrdenesService.index().subscribe(
			response => {
			  if( response.status == 'success' ) {
          this.estatusOrdenes = response.estatusOrden;
          console.log(response.estatusOrden);
					console.log(this.estatusOrdenes);
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
      		const modalRef = this._modalService.open(ModalEstatusOrdenesComponent);
	  		modalRef.componentInstance.boton = 'Guardar';
	  		modalRef.componentInstance.title = 'Agregar Nuevo Estatus de producto';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			  modalRef.componentInstance.estatusOrden = this.estatusOrden;
			  modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  }, (reason) => {
		  });
		} else {
			const modalRef = this._modalService.open(ModalEstatusOrdenesComponent);
	  		modalRef.componentInstance.boton = 'Actualizar';
	  		modalRef.componentInstance.title = 'Actualizar estatus de órdenes';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			modalRef.componentInstance.estatusOrden = this.estatusOrdenes[indice];
			modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  	}, (reason) => {
		  	});
		}	
    }

}
