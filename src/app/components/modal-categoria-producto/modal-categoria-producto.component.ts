import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasProductosService } from '../../services/categorias-productos.service';
import { FosUserService } from '../../services/fos-user.service';
import { CategoriaProducto } from '../../models/categoria-producto';

@Component({
  selector: 'app-modal-categoria-producto',
  templateUrl: './modal-categoria-producto.component.html',
  styleUrls: ['./modal-categoria-producto.component.css'],
  providers: [ CategoriasProductosService, FosUserService ]
})
export class ModalCategoriaProductoComponent implements OnInit {

  @Input() boton: string;
  @Input() title: string;
  @Input() token;
  @Input() identity;
  @Input() categoriaProducto: CategoriaProducto;
  public status: string;

  constructor(
    private _categoriasProductosService: CategoriasProductosService,
    private _fosUserService: FosUserService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  saveEdit() {
    if(this.boton == 'Guardar') {
      this._categoriasProductosService.store(this.categoriaProducto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.categoriaProducto = response.categoriaProducto;
            console.log(this.categoriaProducto);
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
      this._categoriasProductosService.update(this.categoriaProducto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.categoriaProducto = response.categoriaProducto;
            console.log(this.categoriaProducto);
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
