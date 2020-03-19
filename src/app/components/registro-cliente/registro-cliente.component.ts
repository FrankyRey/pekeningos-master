import { Component, OnInit, Input } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from "../../models/cliente";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
  providers: [ ClientesService ]
})
export class RegistroClienteComponent implements OnInit {
  @Input() boton: string;
  @Input() clienteEmail: string;
  @Input() cliente: Cliente;
  public status: string;
  public clientForm: FormGroup;

  constructor(private _clientesService: ClientesService, private fb: FormBuilder, public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {
    this.crearFormularioClientes();
  }

  crearFormularioClientes() {
    
    this.clientForm = this.fb.group({
      email: this.clienteEmail,
      nombre: '',
      apellidos: '',
      birthday: '', 
      telefono: ''
    })
  }

  save(){
    console.log(this.clientForm);
    this._clientesService.store(this.clientForm.value).subscribe(
      response => {
        if (response.status == "success") {
          this.cliente = response.producto;
          console.log(this.cliente);
          this.activeModal.close("success");
        } else {
          console.log("Sin datos recuperados");
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    )
  }

}
