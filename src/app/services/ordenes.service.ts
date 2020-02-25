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
}
