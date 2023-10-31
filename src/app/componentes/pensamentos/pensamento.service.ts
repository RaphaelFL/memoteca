import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly Api = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.Api)
  }

  criar(pensamento:Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.Api, pensamento)
  }
  
  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.Api}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    const url=`${this.Api}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id:number): Observable<Pensamento> {
    const url=`${this.Api}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
