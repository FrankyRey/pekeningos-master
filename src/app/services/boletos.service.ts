import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boleto } from '../models/boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletosService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde BoletosService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/boleto', {headers: headers});
  }

  show(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/boleto', {headers: headers});
  }

  store(boleto, token): Observable<any> {
    let json = JSON.stringify(boleto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/user/login', params, { headers:headers });
  }
}
