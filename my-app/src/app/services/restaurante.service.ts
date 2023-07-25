//https://codeshare.io/8p4PVZ

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from '../models/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {


  static readonly URL_RESTAURANTES_PROD:string = "restaurante";

  static readonly URL_RESTAURANTES_TEST:string = "http://localhost:8081/restaurante";

  static readonly URL_ACTUAL:string = RestauranteService.URL_RESTAURANTES_PROD;


  cabeceras : HttpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http:HttpClient) { }

  getListaRestaurantes ():Observable<Array<Restaurante>>
  {
      return this.http.get<Array<Restaurante>>(RestauranteService.URL_ACTUAL);
  }

  postRestaurante (restaurante:Restaurante):Observable<Restaurante>
  {
    return this.http.post<Restaurante>(RestauranteService.URL_ACTUAL, restaurante, {headers:this.cabeceras});
  }

  postRestauranteConFoto (restaurante:Restaurante, archivo:File): Observable<Restaurante>
  {
//declaramos una variable local que represente el FormData
    let formData = new FormData();

        formData.append('nombre', restaurante.nombre);
        formData.append('direccion', restaurante.direccion);
        formData.append('barrio', restaurante.barrio);
        formData.append('web', restaurante.web);
        formData.append('fichaGoogle', restaurante.fichaGoogle);
        formData.append('latitud', restaurante.latitud+'');
        formData.append('longuitud',  restaurante.longitud+'');
        formData.append('precio', restaurante.precio+'');
        formData.append('especialidad1', restaurante.especialidad1);
        formData.append('especialidad2', restaurante.especialidad2);
        formData.append('especialidad3', restaurante.especialidad3);
        formData.append('archivo', archivo);

    return this.http.post<Restaurante>(RestauranteService.URL_ACTUAL+"/crear-con-foto", formData);
  }

  ////GET http://localhost:8081/restaurante/pagina?page=0&size=2
  getPaginaRestaurantes (page:number, size:number):Observable<any>  {
    let parametros:HttpParams = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(RestauranteService.URL_ACTUAL+"/pagina", {params:parametros});
  }

   ////GET http://localhost:8081/restaurante/buscarPorBarrioNombreOEspecialidad?clave=papa
   getRestaurantesPorTermino (termino:string):Observable<Array<Restaurante>>  {
    let parametros:HttpParams = new HttpParams().set('clave', termino);
    return this.http.get<Array<Restaurante>>(RestauranteService.URL_ACTUAL+"/buscarPorBarrioNombreOEspecialidad", {params:parametros});
  }

}

