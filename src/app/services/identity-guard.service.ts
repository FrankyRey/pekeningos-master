import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable, identity } from 'rxjs';
import { FosUserService } from './fos-user.service';

@Injectable({
  providedIn: 'root'
})
export class IdentityGuardService implements CanActivate {

  
  constructor(
    private _router: Router,
    private _fosUserService: FosUserService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let user = this._fosUserService.getIdentity();
    
    if (user.role === next.data.role && identity) {
      return true;
    }

    // navigate to not found page
    this._router.navigate(['/not-found']);
    return false;
  }

}


