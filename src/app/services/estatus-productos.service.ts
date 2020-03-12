import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatusProductosService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde EstatusProductosService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/estatusProducto', {headers: headers});
  }

  store(estatusProducto, token): Observable<any> {
  	let json = JSON.stringify(estatusProducto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/estatusProducto', params, { headers:headers });
  }

  update(estatusProducto, token): Observable<any> {
    let json = JSON.stringify(estatusProducto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/estatusProducto/' + estatusProducto.id, params, { headers:headers });
  }
}
