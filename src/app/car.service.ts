import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cartask } from './cartask';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseURL:String = "http://localhost:8080";
  getURL :String ="http://localhost:8080/getWork";
  getURLById : String="http://localhost:8080/getWorkById";
  updateURL:String ="http://localhost:8080/updateWork";
  deleteURL :String="http://localhost:8080/deleteWork";

  constructor(private httpClient: HttpClient) { }
  
  getworkList(): Observable<Cartask[]>{
    return this.httpClient.get<Cartask[]>(`${this.getURL}`);

  }

  creatework(cartask: object): Observable<Object>{
    return this.httpClient.post<object>(`${this.baseURL}`, Cartask);
  }

  getworkById(id: number): Observable<Cartask>{
    return this.httpClient.get<Cartask>(`${this.getURLById}/${id}`);
  }

  updatework(id: number,cartask: Cartask): Observable<Object>{
    return this.httpClient.put(`${this.updateURL}/${id}`, cartask);
  }

  deletework(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteURL}/${id}`);
  }
}
