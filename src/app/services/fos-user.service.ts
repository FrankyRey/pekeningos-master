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

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/user/all', {headers: headers});
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

  store( producto, token): Observable<any> {
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/user/register', params, { headers:headers });
  }

  update( user, token ) { 
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);
    console.log(params);
    return this._http.put('http://localhost:8000/api/user/update', params, { headers:headers });
  }
}
