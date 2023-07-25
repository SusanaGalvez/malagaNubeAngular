import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PerroWeb } from '../models/perro-web';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerroService {

  //DESDE AQUÍ, VAMOS A INTERACATUAR CON EL SERVIDOR
   
  static readonly URL_API_PERROS ="https://dog.ceo/api/breeds/image/random";

  /*@Autowired
  httpClient:HttpClient;*/

  constructor(private httpClient:HttpClient) { 
  }

  //el método me devuelve un PerroWeb, en un futuro, dentro de un rato
  getPerroAleatorio():Observable<PerroWeb>
  {
    //Entre <comillas> inidico el tipo de dato recibido el cuerpo del mensaje en JSON
    return this.httpClient.get<PerroWeb>(PerroService.URL_API_PERROS);
  }


}
