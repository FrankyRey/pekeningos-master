import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstatusOrdenesService {

  constructor(public _http: HttpClient) { }

  index(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get('http://localhost:8000/api/estatusOrden', {headers: headers});
  }

  store(estatusOrden, token): Observable<any> {
  	let json = JSON.stringify(estatusOrden);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.post('http://localhost:8000/api/estatusOrden', params, { headers:headers });
  }

  update(estatusOrden, token): Observable<any> {
    let json = JSON.stringify(estatusOrden);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Authorization', token);

    return this._http.put('http://localhost:8000/api/estatusOrden/' + estatusOrden.id, params, { headers:headers });
  }
}
