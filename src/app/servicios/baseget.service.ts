import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BasegetService {

  constructor(
    private http : HttpClient
  ) { }

  consultarBases(): Observable<any> {
    const url = "/base";
    return this.http.get(url);
  }

  agregarBase(dir : string): void{
    const url = "/base";
    this.http.post(url, {"direccion" : dir}, {responseType : 'json'});
  }
}
