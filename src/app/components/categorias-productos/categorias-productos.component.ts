import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasProductosService } from '../../services/categorias-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { CategoriaProducto } from '../../models/categoria-producto';
import { ModalCategoriaProductoComponent } from '../modal-categoria-producto/modal-categoria-producto.component';

@Component({
  selector: 'app-categorias-productos',
  templateUrl: './categorias-productos.component.html',
  styleUrls: ['./categorias-productos.component.css'],
  providers: [ CategoriasProductosService, FosUserService ]
})
export class CategoriasProductosComponent implements OnInit {
	
	public status: string;
  	public identity;
  	public token;
  	public categoriaProducto: CategoriaProducto;
  	public categoriasProductos: Array<CategoriaProducto>;

  	constructor(
    	private _categoriasProductosService: CategoriasProductosService,
    	private _fosUserService: FosUserService,
      private _modalService: NgbModal,
  	) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.categoriaProducto = new CategoriaProducto(1,'');
  	}

  	ngOnInit(): void {
  		this.index();
	}

	index(){
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
	}
	  
    new( action, indice = null) {
		if( action == "save" ) {
      		const modalRef = this._modalService.open(ModalCategoriaProductoComponent);
	  		modalRef.componentInstance.boton = 'Guardar';
	  		modalRef.componentInstance.title = 'Agregar Nueva Categoria';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			  modalRef.componentInstance.categoriaProducto = this.categoriaProducto;
			  modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  }, (reason) => {
		  });
		} else {
			const modalRef = this._modalService.open(ModalCategoriaProductoComponent);
	  		modalRef.componentInstance.boton = 'Actualizar';
	  		modalRef.componentInstance.title = 'Actualizar Categoria';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
			modalRef.componentInstance.categoriaProducto = this.categoriasProductos[indice];
			modalRef.result.then((result) => {
				if ( result === 'success' ) {
				   this.index(); // Refresh Data in table grid
				}
		  }, (reason) => {
		  });
		}	
    }

}
