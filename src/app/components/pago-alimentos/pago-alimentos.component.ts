import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';


@Component({
  selector: 'app-pago-alimentos',
  templateUrl: './pago-alimentos.component.html',
  styleUrls: ['./pago-alimentos.component.css'],
  providers: [ OrdenesService ]
})
export class PagoAlimentosComponent implements OnInit {

  constructor(private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
    console.log(this._ordenesService.test());
  }

}
