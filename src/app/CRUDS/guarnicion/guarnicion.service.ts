import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Guarnicion} from './guarnicion';

@Injectable({
  providedIn: 'root'
})
export class GuarnicionService {

  private url:string = 'http://localhost:8085/cevicheria/guarniciones'

  private httpHeaders = new  HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getGuarniciones(): Observable<Guarnicion[]>{
    return this.http.get<Guarnicion[]>(this.url);
  }
}
