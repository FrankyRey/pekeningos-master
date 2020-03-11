import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoletosService } from '../../services/boletos.service';
import { FosUserService } from '../../services/fos-user.service';
import { Boleto } from '../../models/boleto';


@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css'],
  providers: [ BoletosService, FosUserService ]
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
  ) {
    this.identity = _fosUserService.getIdentity();
    this.token = _fosUserService.getToken();
    this.boleto = new Boleto(1,'',0,0,'save','Guardar');
  }

  ngOnInit(): void {
    console.log(this._boletosService.test());
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
  }

  save(form) {
    console.log(this.boleto);
    if(this.boleto.action == 'save') {
      this._boletosService.store(this.boleto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.boleto = response.boleto;
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
      this._boletosService.update(this.boleto, this.token).subscribe(
        response => {
          if( response.status == 'success' ) {
            this.boleto = response.boleto;
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

  delete(id) {
    let boletoTmp = new Boleto(1,'',0,0,'save','Guardar');
    console.log('Desde eliminar' + id);
    this._boletosService.destroy(id, this.token).subscribe(
      response => {
        if( response.status == 'success' ) {
          boletoTmp = response.boleto;
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

  edit(indice) {
    this.boleto = this.boletos[indice];
    this.boleto.action = 'update';
    this.boleto.button = 'Actualizar';
    console.log(this.boleto);
  }

}
