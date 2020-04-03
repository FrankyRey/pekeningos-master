import { Component, OnInit } from '@angular/core';
import { FosUserService } from '../../services/fos-user.service';
import { OrdenesService } from '../../services/ordenes.service';
import { Orden } from '../../models/orden';
import { CarritoOrden } from '../../models/carrito-orden';

@Component({
  selector: 'app-resumen-venta',
  templateUrl: './resumen-venta.component.html',
  styleUrls: ['./resumen-venta.component.css'],
  providers: [ OrdenesService, FosUserService ]
})
export class ResumenVentaComponent implements OnInit {
  public identity;
  public token;
  public carrito: Array<any>;
  public total: number;
  public orden: Orden;
  public status;
  public cliente;
  public desgloseOrden;
  public carritoOrden: CarritoOrden;

  constructor(private _ordenesService: OrdenesService,
    private _fosUserService: FosUserService
  ) { 
    this.identity = _fosUserService.getIdentity();
    this.token = _fosUserService.getToken();
  }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('cliente'));
    this.carrito = JSON.parse(localStorage.getItem('orden'));
    console.log(this.carrito);
    //Calculamos el TOTAL 
    this.total = this.carrito.reduce((
      actual,
      next,
    ) => actual + (next.precio_venta * next.cantidad),
    0);
    console.log("Total: ", this.total)
  }

  save() {
    console.log(this.carrito);
    this.orden = new Orden(1,this.total,1,0,0,this.cliente.id,1);
    this._ordenesService.store(this.orden, this.token).subscribe(
      response => {
        if (response.status == "success") {
          this.orden = response.orden;
          console.log(this.orden);
          this.carritoOrden = new CarritoOrden(this.carrito,this.orden.id,1);
          this._ordenesService.storeDes(this.carritoOrden, this.token).subscribe(
            response => {
              if (response.status == "success") {
                this.desgloseOrden = response.desgloseOrden;
                console.log(this.desgloseOrden);  
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
