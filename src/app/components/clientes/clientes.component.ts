import { Component, OnInit } from '@angular/core';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FosUserService } from '../../services/fos-user.service';
import { ClientesService } from '../../services/clientes.service';

import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ ClientesService ]
})
export class ClientesComponent implements OnInit {

  public status: string;
  	public identity;
  	public token;
  	public cliente: Cliente;
  	public clientes: Array<Cliente>;
    public pages: number = 1;
	

  constructor(private _clientesService: ClientesService, private _fosUserService: FosUserService,
    private _modalService: NgbModal,) { 
    this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
  }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this._clientesService.index().subscribe(
        response => {
          if( response.status == 'success' ) {
        this.clientes = response.clientes;
              console.log(this.clientes);
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
