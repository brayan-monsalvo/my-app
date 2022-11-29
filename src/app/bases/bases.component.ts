import { Component} from '@angular/core';
import { BasegetService } from '../servicios/baseget.service';

@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css'],
  providers:[BasegetService]
})
export class BasesComponent {
  constructor(
    private servicioBaseGet: BasegetService
  ){}

  ngOnInit(){
  }


  agregarBase() : void{
    const direccion = <string>(document.getElementById("direccion") as HTMLInputElement).value;

    this.servicioBaseGet.agregarBase(direccion);
  }
}
