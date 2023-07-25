import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadena',
  templateUrl: './cadena.component.html',
  styleUrls: ['./cadena.component.css']
})
export class CadenaComponent implements OnInit {

  cadenaUsuario:string;
  cadenaReves:string;

  constructor() {

    this.cadenaUsuario='';
    this.cadenaReves = '';

   }


  ngOnInit(): void {
  }

  darLaVuelta():void
  {
    console.log("boton pulsado " + this.cadenaUsuario);
    //split convierto en array
    //para poder darle la vuelta con reverse
    //join, para pasar de array a cadena
    this.cadenaReves =  this.cadenaUsuario.split('').reverse().join('');
    console.log("cadena reves = " + this.cadenaReves);
  }

}
