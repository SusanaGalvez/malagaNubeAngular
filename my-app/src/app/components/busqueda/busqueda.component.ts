import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';
import { MapaComponent } from '../mapa/mapa.component';
import { Console, log } from 'console';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  //ElementRef es el tipo genérico de Angular para referenciar
  //a una etiqueta estándar de HTML
  //Envoltorio de angular a los elementos/etiquetas
  //nativas "wrapper"

  //dentro del componente busqueda esta la caja de busqueda y el mapa , que son hijos
  @ViewChild('cajabusqueda') cajaInput!:ElementRef;
  @ViewChild('mapa') mapaHijo!:MapaComponent;

  listaRestaurantes!:Array<Restaurante>;

  constructor(private rs:RestauranteService) { }

  ngOnInit(): void {
  }

  
  busqueda1()
  {

    let terminoBusqueda:string = this.cajaInput.nativeElement.value;
    console.log('busqueda1 ' + terminoBusqueda);
    //TODO: consumir el servicio web de búsqueda
    //para traer los restaurantes que coincidan
    //con el término de búsqueda
    if (terminoBusqueda!='')
    {
      this.rs.getRestaurantesPorTermino(terminoBusqueda).subscribe
      (
        {
          complete: () => console.log("completado"),
          error: (errorRx) => console.error(errorRx),
          next: (listaRestaurantesRx) =>
          {
            this.listaRestaurantes = listaRestaurantesRx;
          }
        }
      )
    } else {
      this.listaRestaurantes.length = 0;
    }

  }

  restaurateTocado (restaurante:Restaurante)
  {
    this.listaRestaurantes.length = 0;//borramos la lista
    console.log('Nombre tocado = ' +restaurante.nombre);
    //alert('Nombre tocado = ' +restaurante.nombre + ' id ' + restaurante.id);
    //this.mapaHijo.dibujarPunto(restaurante.latitud, restaurante.longuitud);
    this.mapaHijo.dibujarPosicion(restaurante.latitud, restaurante.longitud);
  }


  busqueda2()
  {
    console.log('busqueda2');
  }


  busqueda3()
  {
    console.log('busqueda3');
  }


  encuentrame(){
    if(navigator.geolocation){
      console.log("tenemos acceso al API Geolocation")
      navigator.geolocation.getCurrentPosition((pos)=>this.exito(pos),
      ()=>this.fracaso()
      )

    }else{
      console.log("No tenemos acceso al API Geolocation")

    }
  }


  exito(posicion:GeolocationPosition){
    console.log ("Se ha encontrado su posicion");
    console.log(`Latitud ${posicion.coords.latitude}`);
    console.log(`Longitud ${posicion.coords.longitude}`);
    this.mapaHijo.dibujarPosicion (posicion.coords.latitude,posicion.coords.longitude );
  }



  fracaso(){
    alert("No es posible determinar su ubicación en este dispositivo")
  }
}
