import { Component, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EstatusProductosService } from '../../services/estatus-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { ProductosService } from '../../services/productos.service';

import { EstatusProducto } from '../../models/estatus-producto';
import { Producto } from '../../models/producto';

import { ModalProductosComponent } from '../modal-productos/modal-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ EstatusProductosService, FosUserService, ProductosService ]
})
export class ProductosComponent implements OnInit {

	public status: string;
  	public identity;
  	public token;
  	public estatusProductos: Array<EstatusProducto>;
  	public producto: Producto;
  	public productos: Array<Producto>;

  	constructor(
    	private _estatusProdcutosService: EstatusProductosService,
    	private _fosUserService: FosUserService,
      	private _modalService: NgbModal,
      	private _productosService: ProductosService
  	) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.producto = new Producto(1,'',0,0,'','');
  	}

  	ngOnInit() {
  		this.index();
  	}

  	index() {
  		this._productosService.index().subscribe(
      		response => {
        		if( response.status == 'success' ) {
          			this.productos = response.productos;
          			console.log(this.productos);
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
      		const modalRef = this._modalService.open(ModalProductosComponent);
	  		modalRef.componentInstance.boton = 'Guardar';
	  		modalRef.componentInstance.title = 'Agregar Nuevo Producto';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
	  		modalRef.componentInstance.producto = this.producto;
	  		modalRef.result.then((result) => {
  				if ( result === 'success' ) {
     				this.index(); // Refresh Data in table grid
  				}
			}, (reason) => {
			});
		} else {
			const modalRef = this._modalService.open(ModalProductosComponent);
	  		modalRef.componentInstance.boton = 'Actualizar';
	  		modalRef.componentInstance.title = 'Actualizar Producto';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
	  		modalRef.componentInstance.producto = this.productos[indice];
		}	
    }
}
