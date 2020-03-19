import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(public _http: HttpClient) { }

  test(){
    return "Hola mundo desde ClientesService";
  }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/cliente', {headers: headers});
  }

  findEmail(email): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/clientes/' + email, {headers: headers});
  }

  store(cliente): Observable<any> {
    console.log(cliente);
  	let json = JSON.stringify(cliente);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post('http://localhost:8000/api/cliente', params, { headers:headers });
  }

  update(cliente, token): Observable<any> {
    let json = JSON.stringify(cliente);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/cliente/' + cliente.id, params, { headers:headers });
  }
}
