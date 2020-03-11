import { Component, OnInit } from '@angular/core';
import { EstatusProductosService } from '../../services/estatus-productos.service';

@Component({
  selector: 'app-estatusProductos',
  templateUrl: './estatus-productos.component.html',
  styleUrls: ['./estatus-productos.component.scss'],
  providers: [ EstatusProductosService ]
})
export class EstatusProductosComponent implements OnInit {

  constructor(private _estatusProductosService: EstatusProductosService) { }

  ngOnInit(): void {
    console.log(this._estatusProductosService.test());
  }

}
