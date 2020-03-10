import { Component, OnInit } from '@angular/core';
import { BoletosService } from '../../services/boletos.service';
import { OrdenesService } from '../../services/ordenes.service';
import { Boleto } from '../../models/boleto';

@Component({
  selector: 'app-boletos-venta',
  templateUrl: './boletos-venta.component.html',
  styleUrls: ['./boletos-venta.component.css'],
  providers: [ BoletosService, OrdenesService ]
})
export class BoletosVentaComponent implements OnInit {
  public boletos: Array<Boleto>;

  constructor(private _boletosService: BoletosService, private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
    console.log(this._boletosService.test());
    console.log(this._ordenesService.test());
    this._boletosService.publicados().subscribe(
      response => {
        if( response.status == 'success' ) {
          this.boletos = response.boletos;
          console.log(this.boletos);
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

  cantidad:number=1;
  i=1;
  plus(){
    if(this.i != 20){
      this.i++;
      this.cantidad = this.i;

    }
  }
  minus(){
    if(this.i != 1){
      this.i--;
      this.cantidad = this.i;
    
    }
  }

}
