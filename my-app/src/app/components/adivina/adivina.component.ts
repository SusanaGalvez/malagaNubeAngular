import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';
/**
   * 
   * HACED UNA APP DONDE EL PROGRAMA
   * PIENSE UN NÚMERO DEL 1 AL 100
   * 
   * EL USUARIO, TENDRÁ 5 INTENTOS PARA AVERIGÜAR el
   * NÚMERO PENSADO POR LA MÁQUINA
   * 
   * POR CADA INTENTO, SI FALLA, LE DEBEMOS DAR UNA PISTA
   * Y DECIRLE SI EL NÚMERO INTRODUCIDO ES 
   * MENOR O MAYOR QUE EL BUSCADO
   * 
   * SI ACIERTA, PUES LE DAMOS LA ENHORABUENA
   * SI SUPERA LOS 5 INTENTOS, PUES LE DECIMOS
   * QUE HA PERDIDO Y LA SOLUCIÓN
   */

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit, AfterViewInit {

  titulo:string;//titulo de la ventana
  numusuario:number;//numero introducido por el usuaario
  numadivina:number;//numero que tiene que adivinar
  intentos:number;
  finpartida:boolean;

  @ViewChild('basicTimer') contador!:CdTimerComponent;
  
  constructor() {
    this.finpartida=false;
    console.log("Estoy en el constructor");
    this.titulo = "ADIVINA UN NÚMERO EN 5 INTENTOS entre 1 y 100";
    this.numusuario=0;
    this.numadivina = this.calcularNumAleaotorioDe1a100();
   
    console.log("Numero a adivinar "+ this.numadivina);
    console.log(`Numero a adivinar ${this.numadivina} por el usuario`);
    this.intentos = 0;
    //this.contador.stop();

  }
  ngAfterViewInit(): void {
   console.log("Este método se invoca, cuando ya se ha procesado el html asociado");
   this.contador.stop();
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Estamos en OnInit");
  }

  calcularNumAleaotorioDe1a100():number
  {
    let numgen:number=0;

      numgen = Math.floor(Math.random() * (100) + 1);

    return numgen;
  }

  comprobarIntento(): void {
    if (this.numusuario == this.numadivina) {
      //this.ganopierdo = "ACIERTO!!";
      window.alert("Has acertado!! Enhorabuena :) ");
      this.finpartida = true;
    } else {
      if (this.numusuario < this.numadivina) {
        //this.mensaje = ;
        window.alert("El número buscado es mayor que el introducido " + this.numusuario + ".");
      } else {
        window.alert("El número buscado es menor que el introducido " + this.numusuario + ".");
      }
      this.intentos++;
      if (this.intentos == 5) {
        window.alert(" Has perdido! te has quedado sin intentos. El número buscado era " + this.numadivina + ".");
        this.finpartida = true;
      } 
    }    
    if (this.finpartida)
    {
      this.contador.stop();//paro el contador
      let ti:TimeInterface = this.contador.get();
      console.log("Has tardado " + ti.minutes + " minutos y " +ti.seconds + " segundos");
      
    }
  }

  reset ()
  {
    window.location.reload();//recargo la página y con ello el componente
  }
}


