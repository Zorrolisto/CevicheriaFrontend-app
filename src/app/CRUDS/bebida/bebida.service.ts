import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bebida} from './bebida';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  private url:string = 'http://localhost:8085/cevicheria/bebidas'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getBebidas(): Observable<Bebida[]>{
    return this.http.get<Bebida[]>(this.url);
  }
}
