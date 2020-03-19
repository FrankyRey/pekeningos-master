import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesService } from '../../services/clientes.service';
import { Cliente } from '../../models/cliente';
import { RegistroClienteComponent } from '../registro-cliente/registro-cliente.component';

@Component({
  selector: 'app-valida-cliente',
  templateUrl: './valida-cliente.component.html',
  styleUrls: ['./valida-cliente.component.css'],
  providers: [ ClientesService ]
})
export class ValidaClienteComponent implements OnInit {
  public cliente: Cliente;
  public status: string;

  constructor(
    private _clientesService: ClientesService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    console.log(this._clientesService.test());
  }

  valida(email) {
    this._clientesService.findEmail(email).subscribe(
      response => {
        if( response.status == 'success' ) {
            this.cliente = response.cliente;
            console.log(this.cliente);
            this._router.navigate(['/resumen-venta']);
        } else {
            console.log('Sin datos recuperados');
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
        const modalRef = this._modalService.open(RegistroClienteComponent);
      }
  );
  }

}
