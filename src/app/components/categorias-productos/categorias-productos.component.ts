import { Component, OnInit } from '@angular/core';
import { CategoriasProductosService } from '../../services/categorias-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { CategoriaProducto } from '../../models/categoria-producto';

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
  	) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.categoriaProducto = new CategoriaProducto(1,'');
  	}

  	ngOnInit(): void {
  		console.log(this._categoriasProductosService.test());
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

  	save() {
  		this._categoriasProductosService.store(this.categoriaProducto, this.token).subscribe(
  			response => {
  				if( response.status == 'success' ) {
  					this.categoriaProducto = response.categoriaProducto;
  					console.log(this.categoriaProducto);
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
