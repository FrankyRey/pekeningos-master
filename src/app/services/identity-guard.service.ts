import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FosUserService } from './fos-user.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityGuardService implements CanActivate {

  
  constructor(
    private _router: Router,
    private _fosUserService: FosUserService
  ) { }

  canActivate(){
    let identity = this._fosUserService.getIdentity();

    if(identity){
      return true;
    }else{
      this._router.navigate(['/login']);
    }
  }

}


