import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { BasegetService } from '../servicios/baseget.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


@Component({
  selector: 'app-tablabases',
  templateUrl: './tablabases.component.html',
  styleUrls: ['./tablabases.component.css'],
  providers: [BasegetService]
})

export class TablabasesComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  constructor(public base : BasegetService) {  
    this.consultarBases();
  }


  async consultarBases() {

    let listaFinal : FoodNode[] = [];
    
    const obs = await this.base.consultarBases();

    obs.subscribe(res => {

      for(let i = 0; i < res["resultado"].length; i++){
        listaFinal.push({
          name : `${res["resultado"][i]["numero"]}${" ---> "}${res["resultado"][i]["direccion"]}`
        });
      }

      this.dataSource.data = listaFinal;

    });

    //console.log(listaFinal);

    //console.log(this.hasChild);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  
}
