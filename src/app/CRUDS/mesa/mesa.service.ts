import { Injectable } from '@angular/core';
import { Mesa } from './mesa'

import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private url:string = 'http://localhost:8085/cevicheria/mesas'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(this.url);
  }
}
