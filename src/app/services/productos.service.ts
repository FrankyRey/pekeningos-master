import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde ProductosService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/producto', {headers: headers});
  }

  store( producto, token): Observable<any> {
  	let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/producto', params, { headers:headers });
  }

  update(producto, token): Observable<any> {
    let json = JSON.stringify(producto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/producto/' + producto.id, params, { headers:headers });
  }
}
