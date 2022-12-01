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


  async agregarBase() : Promise<void>{
    const direccion = <string>(document.getElementById("direccion_agregar") as HTMLInputElement).value;

    console.log(direccion);

    const obs = await this.servicioBaseGet.agregarBase(direccion);
    
    obs.subscribe(res => {
      console.log(res);
      window.location.reload();    
    });
    
    }

  async eliminarBase() : Promise<void>{
    const numero_s = <string>(document.getElementById("numero_direccion_eliminar") as HTMLInputElement).value;

    const numero : number = +numero_s;

    console.log(numero);

    const obs  = await this.servicioBaseGet.eliminarBase(numero);

    obs.subscribe(res => {
      console.log(res);
      window.location.reload();
    });
    
  }

  async actualizarBase(): Promise<void>{
    const num = <string>(document.getElementById("numero_direccion_actualizar") as HTMLInputElement).value;
    const dir = <string>(document.getElementById("direccion_actualizar") as HTMLInputElement).value;

    const numero : number = +num;

    const obs = await this.servicioBaseGet.actualizarBase(numero, dir);

    obs.subscribe(res => {
      console.log(res);
      window.location.reload();
    });
  }
}
