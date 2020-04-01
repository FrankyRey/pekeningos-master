import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FosUserService } from '../../services/fos-user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-modal-usuarios',
  templateUrl: './modal-usuarios.component.html',
  styleUrls: ['./modal-usuarios.component.css'],
  providers: [ FosUserService ]
})
export class ModalUsuariosComponent implements OnInit {
	@Input() boton: string;
  	@Input() title: string;
  	@Input() token;
  	@Input() identity;
  	@Input() usuario: User;
  	public status: string;
  	public roles;

  constructor(
  	private _fosUserService: FosUserService,
  	public activeModal: NgbActiveModal,
  ) { }

  	ngOnInit() {
  		this.roles = ['ADMIN_USER', 'POS_USER', 'SALES_USER', 'FOOD_USER'];
  		console.log(this.usuario);
  	}

  	saveEdit() {
    	if(this.boton == 'Guardar') {
      		this._fosUserService.store(this.usuario, this.token).subscribe(
        		response => {
          			if( response.status == 'success' ) {
           				this.usuario = response.usuario;
            			console.log(this.usuario);
            			this.activeModal.close('success');
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
    		this._fosUserService.update(this.usuario, this.token).subscribe(
        		response => {
                console.log(response);
          			/*if( response.status == 'success' ) {
           				this.usuario = response.usuario;
            			console.log(this.usuario);
          			} else {
            			console.log('Sin datos recuperados');
          			}*/
        		},
        		error => {
          			this.status = 'error';
          			console.log(<any>error);
        		}
      		);
    	}
	}

}
