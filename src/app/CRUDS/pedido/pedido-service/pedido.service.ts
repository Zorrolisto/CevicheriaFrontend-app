import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pedido} from '../pedido-class/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url:string = 'http://localhost:8080/cevicheria/pedidos'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  searchPedidos(cliente:string,mesa:string,precioTotal:number,
    precioTotalCondicion:string,fecha:Date,fechaCondicion:string,
    size: number, page: number): Observable<Pedido[]>{
    let buscar=''; if(cliente){ buscar=buscar+'&cliente='+cliente; }
    if(mesa){ buscar=buscar+'&mesa='+mesa;   }
    if(precioTotal){ buscar=buscar+'&precioTotal='+precioTotal;   }
    if(precioTotalCondicion){ buscar=buscar+'&precioTotalCondicion='+precioTotalCondicion; }
    if(fecha){ buscar=buscar+'&fecha='+fecha;   }
    if(fechaCondicion){ buscar=buscar+'&fechaCondicion='+fechaCondicion;   }
    return this.http.get<Pedido[]>(`${this.url}/busqueda?size=${size}&page=${page+1}${buscar}`);
  }

  getPedidos(size:number, page:number): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}?size=${size}&page=${page}`);
  }

  getPedido(id):Observable<Pedido>{
    return this.http.get<Pedido>(`${this.url}/${id}`)
  }

  createPedido(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url,pedido,{headers:this.httpHeaders})
  }

  updatePedido(pedido:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(`${this.url}/${pedido.id}`,pedido,{headers: this.httpHeaders});
  } 

  deletePedido(id:number):Observable<Pedido>{
    return this.http.delete<Pedido>(`${this.url}/${id}`,{headers: this.httpHeaders});
  }
}
