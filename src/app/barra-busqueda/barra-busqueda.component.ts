import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../_service/busqueda.service';
import { Busqueda } from '../_model/busqueda';

@Component({
  selector: 'mybarra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {
  value: string = '';
  value1: string = '';
  sitios: Busqueda[];

  constructor(private busquedaService: BusquedaService) { }

  ngOnInit() {
  }

  enviarDatos() {
    /* let datos = [{ "lugar": lugar.value, "ubicacion": ubicacion.value }]
     console.log(datos);*/

    this.busquedaService.busqueda(this.value, this.value1).subscribe(res => {

      this.sitios = res;

    }, err => {

    });

  }

}
