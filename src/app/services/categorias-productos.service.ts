import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaProducto } from '../models/categoria-producto';

@Injectable({
  providedIn: 'root'
})
export class CategoriasProductosService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde CategoriasProductosService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/categoriaProducto', {headers: headers});
  }

  store(categoriaProducto, token): Observable<any> {
  	let json = JSON.stringify(categoriaProducto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/categoriaProducto', params, { headers:headers });
  }

  update(categoriaProducto, token): Observable<any> {
    let json = JSON.stringify(categoriaProducto);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/categoriaProducto/' + categoriaProducto.id, params, { headers:headers });
  }
}
