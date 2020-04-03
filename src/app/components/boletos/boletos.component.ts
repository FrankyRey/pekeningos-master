import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import Swal from "sweetalert2";
import { BoletosService } from "../../services/boletos.service";
import { FosUserService } from "../../services/fos-user.service";
import { Boleto } from "../../models/boleto";

import { ModalBoletosComponent } from '../modal-boletos/modal-boletos.component';


@Component({
  selector: "app-boletos",
  templateUrl: "./boletos.component.html",
  styleUrls: ["./boletos.component.css"],
  providers: [BoletosService, FosUserService]
})
export class BoletosComponent implements OnInit {
  public status: string;
  public identity;
  public token;
  public boleto: Boleto;
  public boletos: Array<Boleto>;

  constructor(
    private _boletosService: BoletosService,
    private _fosUserService: FosUserService,
    private _modalService: NgbModal
  ) {
    this.identity = _fosUserService.getIdentity();
    this.token = _fosUserService.getToken();
    this.boleto = new Boleto(1, "", 0, 0, "save", "Guardar");
  }

  ngOnInit(): void {
    this.index();
  }

  index() {
    this._boletosService.index().subscribe(
      response => {
        if (response.status == "success") {
          this.boletos = response.boletos;
          console.log(this.boletos);
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

  new(action, indice = null) {
    if (action == "save") {
      const modalRef = this._modalService.open(ModalBoletosComponent);
      modalRef.componentInstance.boton = "Guardar";
      modalRef.componentInstance.title = "Agregar Nuevo Producto";
      modalRef.componentInstance.token = this.token;
      modalRef.componentInstance.identity = this.identity;
      modalRef.componentInstance.boletos = this.boletos;
      modalRef.result.then(
        result => {
          if (result === "success") {
            this.index(); // Refresh Data in table grid
          }
        },
        reason => {}
      );
    } else {
      const modalRef = this._modalService.open(ModalBoletosComponent);
      modalRef.componentInstance.boton = "Actualizar";
      modalRef.componentInstance.title = "Actualizar Producto";
      modalRef.componentInstance.token = this.token;
      modalRef.componentInstance.identity = this.identity;
      modalRef.componentInstance.boletos = this.boletos[indice];
      modalRef.result.then(
        result => {
          if (result === "success") {
            this.index(); // Refresh Data in table grid
          }
        },
        reason => {}
      );
    }
  }

  delete(id) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Borrarás este boleto para siempre.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, borrar el boleto."
    }).then(result => {
      if (result.value) {
        let boletoTmp = new Boleto(1, "", 0, 0, "save", "Guardar");
        this._boletosService.destroy(id, this.token).subscribe(
          response => {
            if (response.status == "success") {
              boletoTmp = response.boleto;
              this._boletosService.index().subscribe(
                response => {
                  if (response.status == "success") {
                    this.boletos = response.boletos;
                    console.log(this.boletos);
                  } else {
                    console.log("Sin datos recuperados");
                  }
                },
                error => {
                  this.status = "error";
                  console.log(<any>error);
                }
              );
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
    });
  }

  
}
