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

  getBebida(id):Observable<Bebida>{
    return this.http.get<Bebida>(`${this.url}/${id}`)
  }

  createBebida(bebida:Bebida):Observable<Bebida>{
    return this.http.post<Bebida>(this.url,bebida,{headers:this.httpHeaders})
  }

  updateBebida(bebida:Bebida):Observable<Bebida>{
    return this.http.put<Bebida>(`${this.url}/${bebida.id}`,bebida,{headers: this.httpHeaders});
  }

  updateEstadoBebida(id):Observable<Bebida>{
    return this.http.put<Bebida>(`${this.url}/estatus/${id}`,{headers: this.httpHeaders});
  }
}
