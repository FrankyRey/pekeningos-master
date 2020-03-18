import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { CategoriasProductosService } from "../../services/categorias-productos.service";
import { EstatusProductosService } from "../../services/estatus-productos.service";
import { ProductosService } from "../../services/productos.service";

import { CategoriaProducto } from "../../models/categoria-producto";
import { EstatusProducto } from "../../models/estatus-producto";
import { Producto } from "../../models/producto";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modal-productos",
  templateUrl: "./modal-productos.component.html",
  styleUrls: ["./modal-productos.component.css"],
  providers: [
    CategoriasProductosService,
    EstatusProductosService,
    ProductosService
  ]
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
  productForm: FormGroup;

  constructor(
    private _productosService: ProductosService,
    private _estatusProductosService: EstatusProductosService,
    private _categoriasProductosService: CategoriasProductosService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.crearFormulario();
  }

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

  crearFormulario() {
    this.productForm = this.fb.group({
      descripcion_corta: [""],
      inventario: [""],
      costo: [""],
	  precio_venta: [""],
	  estatus: [""],
	  categoria: [""]
    })
  }

  saveEdit() {
    if (this.boton == "Guardar") {
      this._productosService.store(this.productForm.value, this.token).subscribe(
        response => {
          if (response.status == "success") {
            this.productForm = response.productForm;
            console.log(this.productForm);
            this.activeModal.close("success");
          } else {
            console.log("Sin datos recuperados");
          }
        },
        error => {
          this.status = "error";
          console.log(<any>error);
        }
      );
    } else {
      this._productosService.update(this.productForm.value, this.token).subscribe(
        response => {
          if (response.status == "success") {
            this.productForm = response.productForm;
            console.log(this.productForm);
            this.activeModal.close("success");
          } else {
            console.log("Sin datos recuperados");
          }
        },
        error => {
          this.status = "error";
          console.log(<any>error);
        }
      );
    }
  }
}
