import { Component, OnInit, Input } from "@angular/core";
import { ClientesService } from "../../services/clientes.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Cliente } from "../../models/cliente";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-registro-cliente",
  templateUrl: "./registro-cliente.component.html",
  styleUrls: ["./registro-cliente.component.css"],
  providers: [ClientesService]
})
export class RegistroClienteComponent implements OnInit {
  @Input() boton: string;
  @Input() clienteEmail: string;
  @Input() cliente: Cliente;
  public status: string;
  public clientForm: FormGroup;

  constructor(
    private _clientesService: ClientesService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.crearFormularioClientes();
  }

  crearFormularioClientes() {
    this.clientForm = this.fb.group({
      email: this.clienteEmail,
      name: "",
      last_name: "",
      birthday: "",
      phone_number: ""
    });
  }

  save() {
    console.log(this.clientForm);
    this._clientesService.store(this.clientForm.value).subscribe(
      response => {
        if (response.status == "success") {
          this.cliente = response.cliente;
          console.log(this.cliente);
          this.activeModal.close("success");
          this._router.navigate(["/resumen-venta"]);
        } else {
          console.log("Sin datos recuperados");
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }
}
