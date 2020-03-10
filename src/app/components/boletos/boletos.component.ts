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

  save() {
    console.log(this.token);
    /*this._boletosService.index().subscribe(
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
    );*/
  }

}
