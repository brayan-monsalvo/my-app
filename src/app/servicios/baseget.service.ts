import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BasegetService {

  constructor(
    private http : HttpClient
  ) { }

  consultarBases(): Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders()
    }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    const url = "http://3.214.137.245:5000/base";
    return this.http.get(url, httpOptions);
  }

  agregarBase(dir : string): void{
    const httpOptions = {
      headers : new HttpHeaders()
    }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    const url = "http://3.214.137.245:5000/base";
    this.http.post(url, {"direccion" : dir}, httpOptions);
  }
}
