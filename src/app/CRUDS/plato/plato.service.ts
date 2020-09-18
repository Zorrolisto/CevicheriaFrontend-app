import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plato} from './plato';

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  private url:string = 'http://localhost:8085/cevicheria/platos'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPlatos(): Observable<Plato[]>{
    return this.http.get<Plato[]>(this.url);
  }
}
