import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatusClientesService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde EstatusClientesService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/estatusCliente', {headers: headers});
  }

  store(estatusCliente, token): Observable<any> {
  	let json = JSON.stringify(estatusCliente);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/estatusCliente', params, { headers:headers });
  }

  update(estatusCliente, token): Observable<any> {
    let json = JSON.stringify(estatusCliente);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/estatusCliente/' + estatusCliente.id, params, { headers:headers });
  }
}