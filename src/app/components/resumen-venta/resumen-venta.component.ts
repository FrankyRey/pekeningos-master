import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-resumen-venta',
  templateUrl: './resumen-venta.component.html',
  styleUrls: ['./resumen-venta.component.css'],
  providers: [ OrdenesService ]
})
export class ResumenVentaComponent implements OnInit {
  public carrito: Array<any>;
  public total: number;

  constructor(private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
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
    
}
