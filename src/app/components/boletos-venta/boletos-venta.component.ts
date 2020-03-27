import { Component, OnInit } from '@angular/core';
import { BoletosService } from '../../services/boletos.service';
import { OrdenesService } from '../../services/ordenes.service';
import { Boleto } from '../../models/boleto';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { captureRejectionSymbol } from 'events';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-boletos-venta',
  templateUrl: './boletos-venta.component.html',
  styleUrls: ['./boletos-venta.component.css'],
  providers: [ BoletosService, OrdenesService ]
})
export class BoletosVentaComponent implements OnInit {
  public status: string;
  public boletos: Array<Boleto>;
  public carritoR: Array<any>;

  constructor(
    private _boletosService: BoletosService, 
    private _ordenesService: OrdenesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.carritoR = JSON.parse(localStorage.getItem('orden'));
    console.log(this._boletosService.test());
    console.log(this._ordenesService.test());
    this._boletosService.publicados().subscribe(
      response => {
        if( response.status == 'success' ) {
          this.boletos = response.boletos;
          console.log(this.boletos);
          if(this.carritoR){
            let carr = this.carritoR;
            this.boletos.forEach(function(boleto){
              carr.forEach(function(producto){
                if(boleto.id === producto.id)
                  boleto.cantidad = producto.cantidad;
              });
            });
            console.log(this.boletos);
          }
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

  change(index, value: number): void {
    this.boletos[index].cantidad = value;
    console.log(this.boletos[index]);
  }

  verificar(): void {
    let carrito: Array<any> = [];
    this.boletos.forEach(function(boleto){
      if(boleto.cantidad != null)
        carrito.push(boleto);
    });

    console.log(carrito);
    localStorage.setItem('orden', JSON.stringify(carrito));
    this._router.navigate(['/valida-cliente']);
  }

}
