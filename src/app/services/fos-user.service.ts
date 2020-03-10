import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FosUserService {
  public identity;
  public token;

  constructor(
      public _http: HttpClient
    ) {

    }

  test(){
    return "Hola mundo desde FosUserService";
  }

  singup(user, gettoken = null): Observable<any> {
    if(gettoken != null) {
      user.getToken = true;
    }

    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post('http://localhost:8000/api/user/login', params, { headers:headers });
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    
    if(identity && identity != "undefined") {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token');

    if(token && token != "undefined") {
      this.token = token;
    } else {
      this.token = null
    }

    return this.token;
  }
}