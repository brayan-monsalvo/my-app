import { Component, OnInit} from '@angular/core';
import { BasegetService } from '../servicios/baseget.service';
import { RutapostService } from '../servicios/rutapost.service'; 
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import { FormsModule } from '@angular/forms';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css'],
  providers: [BasegetService, RutapostService]
})

export class RutaComponent {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(
    public base : BasegetService,
    public ruta : RutapostService,
  ){}

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


  public numero_ruta : number = 0;
  public lista_direcciones: string[] = [];


  agregarNumeroBase(): void{
    let string_base : string = <string>(document.getElementById("numero_base") as HTMLInputElement).value;
    this.numero_ruta = +string_base;
    console.log(this.numero_ruta);

  }

  agregarDireccion(): void{
    let direccion : string = <string>(document.getElementById("direcciones") as HTMLInputElement).value;

    console.log(direccion);

    this.lista_direcciones.push(direccion);

  }

  async calcularRuta() {
    const obs = await this.ruta.obtenerRuta(this.numero_ruta, this.lista_direcciones);

    console.log(this.numero_ruta);
    console.log(this.lista_direcciones);

    let instrucciones : FoodNode[] = [];
    let dirDesde : FoodNode[] = [];
    let dirHacia : FoodNode[] = [];
    let listaFinal : FoodNode[] = [];

    obs.subscribe(res => {
      let numRutas : number = res["rutas"].length;

      console.log(res);

      for(let i = 0; i < numRutas; i++){

        for (let j = 0; j < res["rutas"][i]["instrucciones"].length; j++){
          instrucciones.push({
            name : res["rutas"][i]["instrucciones"][j]
          });
        }

        listaFinal.push(
          {
            name: `${"ruta "}${(i+1)}`,
            children : [
              {
                name : `${"deade : "}${res["rutas"][i]["desde"]}`
              },
              {
                name : `${"hacia : "}${res["rutas"][i]["hacia"]}`
              },
              {
                name : "instrucciones: ",
                children : instrucciones.slice()
              }
            ]
          }
          );

        instrucciones.length = 0;

      }

      this.dataSource.data = listaFinal;

    });

  }

}
