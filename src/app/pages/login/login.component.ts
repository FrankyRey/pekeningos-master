import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from '../../models/user';
import { FosUserService } from '../../services/fos-user.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ FosUserService ]
})
export class LoginComponent implements OnInit {
  public user: User;
  public status: string;
  public token;
  public identity;

  constructor(
    private _FosUserService: FosUserService,  
    private _route: ActivatedRoute,
    private _router: Router,
    private _spinner: NgxSpinnerService) {
    this.user = new User(1,'','','','','','','','');
  }

  ngOnInit() {
    console.log('Test desde login');
  }

  onSubmit(form) {
    this._FosUserService.singup(this.user).subscribe(
      response => {
        // TOKEN
        if(response.status != 'error') {
          this.status = 'success';
          this.token = response;

          //Objeto usuario
          this._FosUserService.singup(this.user, true).subscribe(
            response => {
              this.status = 'success';
              this.identity = response;

              console.log(this.token);
              console.log(this.identity);

              // Persistir datos del usuario
              localStorage.setItem('token', this.token);
              localStorage.setItem('identity', JSON.stringify(this.identity));
              
              this._spinner.show();
                  
              setTimeout(() => {
                /** spinner ends after 5 seconds */
                switch(this.identity.role){
                  case "ADMIN_USER":
                    this._router.navigate(['/dashboard']);    
                    break;
                  case "POS_USER":
                    this._router.navigate(['/valida-orden']);
                    break;
                  case "SALES_USER":
                    this._router.navigate(['/boletos-venta']);
                    break;
                  case "FOOD_USER":
                    this._router.navigate(['/productos-venta']);
                    break;
                }
                this._spinner.hide();
              }, 3000);
              
              //Redireccionar a Pantalla
              
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );
        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

}
