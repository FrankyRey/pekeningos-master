import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde OrdenesService";
  }

  store( orden, token): Observable<any> {
  	let json = JSON.stringify(orden);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    console.log(params);
    return this._http.post('http://localhost:8000/api/orden', params, { headers:headers });
  }

  storeDes( desglose, token): Observable<any> {
    let json = JSON.stringify(desglose);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    console.log(params);
    return this._http.post('http://localhost:8000/api/desgloseOrden', params, { headers:headers });
  }
}
