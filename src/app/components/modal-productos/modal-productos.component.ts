import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoriasProductosService } from '../../services/categorias-productos.service';
import { EstatusProductosService } from '../../services/estatus-productos.service';
import { ProductosService } from '../../services/productos.service';

import { CategoriaProducto } from '../../models/categoria-producto';
import { EstatusProducto } from '../../models/estatus-producto';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-modal-productos',
  templateUrl: './modal-productos.component.html',
  styleUrls: ['./modal-productos.component.css'],
  providers: [ CategoriasProductosService, EstatusProductosService, ProductosService ]
})
export class ModalProductosComponent implements OnInit {

	@Input() boton: string;
  	@Input() title: string;
  	@Input() token;
  	@Input() identity;
  	@Input() producto: Producto;
  	public categoriasProductos: Array<CategoriaProducto>;
  	public estatusProductos: Array<EstatusProducto>;
  	public status: string;

  constructor(
  	private _productosService: ProductosService,
  	private _estatusProductosService: EstatusProductosService,
  	private _categoriasProductosService: CategoriasProductosService,
  	public activeModal: NgbActiveModal,
  ) { }

  ngOnInit() {
  	this._categoriasProductosService.index().subscribe(
      	response => {
       		if( response.status == 'success' ) {
         		this.categoriasProductos = response.categoriasProductos;
          		console.log(this.categoriasProductos);
        	} else {
        		console.log('Sin datos recuperados');
        	}
      	},
      	error => {
       		this.status = 'error';
        	console.log(<any>error);
      	}
    );

    this._estatusProductosService.index().subscribe(
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

  	saveEdit() {
		 
    	if(this.boton == 'Guardar') {
			console.log(this.producto);
      	this._productosService.store(this.producto, this.token).subscribe(
        		response => {
          			if( response.status == 'success' ) {
           				this.producto = response.producto;
            			console.log(this.producto);
            			this.activeModal.close('success');
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
			console.log(this.producto);
    	this._productosService.update(this.producto, this.token).subscribe(
        		response => {
          			if( response.status == 'success' ) {
           				this.producto = response.producto;
            			console.log(this.producto);
                  this.activeModal.close('success');
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
