import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Restaurante } from 'src/app/models/restaurante';
import { RestauranteService } from 'src/app/services/restaurante.service';


@Component({
  selector: 'app-restaurante-pag',
  templateUrl: './restaurante-pag.component.html',
  styleUrls: ['./restaurante-pag.component.css']
})
export class RestaurantePagComponent implements OnInit {


  ruta_servicio_foto:string = RestauranteService.URL_ACTUAL+"/obtenerFoto";


  lista_restaurantes!:Array<Restaurante>;

  totalRegistros:number=0;
  totalPorPagina:number=2;
  opcionesTamanio:number[]=[2,4,6,8];
  paginaActual:number=0;

  constructor(private restauranteService:RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantesPorPaginas();
  }

  paginar(evento:PageEvent){
    console.log("eventopaginator")
    this.paginaActual = evento.pageIndex;
    this.totalPorPagina =evento.pageSize;

    this.getRestaurantesPorPaginas();
  }


  borrarRestaurante()
  {
    //TODO: obtener el id del restaurante y hacer el delete
    console.log("quiere borrar el resutarante");
  }



  getRestaurantesPorPaginas ()
  {
    this.restauranteService.getPaginaRestaurantes
    (this.paginaActual, this.totalPorPagina).
    subscribe
    (
      {
        complete: () => console.log("completo"),
        error: (errorRx) => console.error(errorRx),
        next: (pagina) => {
          //hago el casting
          this.lista_restaurantes = <Array<Restaurante>> pagina.content;
          this.lista_restaurantes.forEach(
            r => console.log("foto = " + r.fotoHashCode)
          )
          this.totalRegistros = pagina.totalElements;
        }
      }

    )
  }




}
