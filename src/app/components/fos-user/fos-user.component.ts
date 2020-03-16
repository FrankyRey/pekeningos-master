import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FosUserService } from '../../services/fos-user.service';
import { User } from '../../models/user';
import { ModalUsuariosComponent } from '../modal-usuarios/modal-usuarios.component';

@Component({
  selector: 'app-fos-user',
  templateUrl: './fos-user.component.html',
  styleUrls: ['./fos-user.component.css'],
  providers: [ FosUserService ]
})
export class FosUserComponent implements OnInit {
	public identity;
	public token;
	public usuario: User;
	public usuarios: Array<User>;
	public status;

  constructor(
  	private _fosUserService: FosUserService,
  	private _modalService: NgbModal
  ) {
    	this.identity = _fosUserService.getIdentity();
    	this.token = _fosUserService.getToken();
    	this.usuario = new User(1,'','','','','','','','');
  	}

  ngOnInit(): void {
    this.index();
  }

  index() {
  	this._fosUserService.index().subscribe(
      	response => {
       		if( response.status == 'success' ) {
          		this.usuarios = response.usuarios;
          		console.log(this.usuarios);
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

  	new( action, indice = null) {
		if( action == "save" ) {
      		const modalRef = this._modalService.open(ModalUsuariosComponent);
	  		modalRef.componentInstance.boton = 'Guardar';
	  		modalRef.componentInstance.title = 'Agregar Nuevo Usuario';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
	  		modalRef.componentInstance.usuario = this.usuario;
	  		modalRef.result.then((result) => {
  				if ( result === 'success' ) {
     				this.index();
  				}
			}, (reason) => {
			});
		} else {
			const modalRef = this._modalService.open(ModalUsuariosComponent);
	  		modalRef.componentInstance.boton = 'Actualizar';
	  		modalRef.componentInstance.title = 'Actualizar Producto';
	  		modalRef.componentInstance.token = this.token;
	  		modalRef.componentInstance.identity = this.identity;
	  		modalRef.componentInstance.usuario = this.usuarios[indice];
		}	
    }

}
