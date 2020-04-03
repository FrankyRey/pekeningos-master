import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { BoletosService } from '../../services/boletos.service';

import { BoletoV } from '../../models/boleto-v';

import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-modal-boletos',
  templateUrl: './modal-boletos.component.html',
  styleUrls: ['./modal-boletos.component.css'],
  providers: [
    BoletosService
  ]
})
export class ModalBoletosComponent implements OnInit {
  @Input() boton: string;
  @Input() title: string;
  @Input() token;
  @Input() identity;
  @Input() boletos: BoletoV;
  public status: string;
  public boletoForm: FormGroup;
  
  constructor(
    private _boletosService: BoletosService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this._boletosService.index().subscribe(
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

  this.crearFormulario();
  }

  crearFormulario() {
    this.boletoForm = this.fb.group({
      id: this.boletos.id,
      descripcion: this.boletos.descripcion,
      precio_venta: this.boletos.precio_venta,
      publicado: this.boletos.publicado
    })
  }

  saveEdit() {
    if (this.boton == "Guardar") {
      console.log(this.boletoForm);
      this._boletosService.store(this.boletoForm.value, this.token).subscribe(
        response => {
          if (response.status == "success") {
            this.boletos = response.boleto;
            console.log(this.boletos);
            this.activeModal.close("success");
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
      this._boletosService.update(this.boletoForm.value, this.token).subscribe(
        response => {
          if (response.status == "success") {
            this.boletos = response.boleto;
            console.log(this.boletos);
            this.activeModal.close("success");
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

}
