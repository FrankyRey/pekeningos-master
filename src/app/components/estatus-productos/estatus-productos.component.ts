import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusProductosService } from '../../services/estatus-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { EstatusProducto } from '../../models/estatus-producto';
import { ModalEstatusProductoComponent } from '../modal-estatus-producto/modal-estatus-producto.component';

@Component({
  selector: 'app-estatus-productos',
  templateUrl: './estatus-productos.component.html',
  styleUrls: ['./estatus-productos.component.scss'],
  providers: [ EstatusProductosService, FosUserService ]
})
export class EstatusProductosComponent implements OnInit {
	
	public status: string;
  	public identity;
  	public token;
  	public estatusProducto: EstatusProducto;
  	public estatusProductos: Array<EstatusProducto>;

  	constructor(
    	private _estatusProdcutosService: EstatusProductosService,
    	private _fosUserService: FosUserService,
      private _modalService: NgbModal,
  	) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.estatusProducto = new EstatusProducto(1,'');
  	}

  	ngOnInit(): void {
  		this.index();
	}

	index() {
		this._estatusProdcutosService.index().subscribe(
			response => {
			  if( response.status == 'success' ) {
					this.estatusProductos = response.estatusProductos;
					console.log(this.estatusProductos);
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
      		const modalRef = this._modalService.open(ModalEstatusProductoComponent);
	  		modalRef.componentInstance.boton = 'Guardar';
	  		modalRef.componentInstance.title = 'Agregar Nueva Categoria';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			  modalRef.componentInstance.estatusProducto = this.estatusProducto;
			  modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  }, (reason) => {
		  });
		} else {
			const modalRef = this._modalService.open(ModalEstatusProductoComponent);
	  		modalRef.componentInstance.boton = 'Actualizar';
	  		modalRef.componentInstance.title = 'Actualizar Categoria';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			modalRef.componentInstance.estatusProducto = this.estatusProductos[indice];
			modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  	}, (reason) => {
		  	});
		}	
    }

}