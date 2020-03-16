import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from '../../models/user';
import { FosUserService } from '../../services/fos-user.service';

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
    private _router: Router) {
    this.user = new User(1,'','','','','ROLE_USER','','','');
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
              //Redireccionar a AdminComponent
              alert(this.identity);
              alert(this.token);
              this._router.navigate(['/dashboard']);
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
