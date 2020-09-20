import { Injectable } from '@angular/core';
import { Mesa } from '../mesa-class/mesa'

 
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private url:string = 'http://localhost:8080/cevicheria/mesas'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getMesas(): Observable<Mesa[]>{
    return this.http.get<Mesa[]>(this.url);
  }

  getMesa(id):Observable<Mesa>{
    return this.http.get<Mesa>(`${this.url}/${id}`);
  }

  createMesa(mesa:Mesa):Observable<Mesa>{
    return this.http.post<Mesa>(this.url,mesa,{headers:this.httpHeaders})
  }
  updateMesa(mesa:Mesa):Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url}/${mesa.id}`,mesa,{headers: this.httpHeaders});
  }

  updateEstadoMesa(id):Observable<Mesa>{
    return this.http.put<Mesa>(`${this.url}/estatus/${id}`,{headers: this.httpHeaders});
  }
}
