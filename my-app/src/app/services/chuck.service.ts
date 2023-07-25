import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FraseChuck } from '../models/frase-chuck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  static readonly URL_CHUCK:string = "https://api.chucknorris.io/jokes/random";

  constructor(private http:HttpClient) { }

  getFraseChuck (): Observable<FraseChuck>
  {
    return this.http.get<FraseChuck>(ChuckService.URL_CHUCK);
  }
}
