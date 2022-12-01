import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutapostService {

  constructor(
    private http: HttpClient
  ) { }


  obtenerRuta(numero_ruta : number, lista_direcciones : string[]) : Observable<any> {
    const url = "http://3.214.137.245:5000/ruta";

    return this.http.post(url, {"numero_ruta" : numero_ruta, "lista_destinos": lista_direcciones}, {responseType : 'json'});

  }
}
