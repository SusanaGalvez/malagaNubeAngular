import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//la etiqueta raíz o padre . id del compomenent / hook, punto de anclaje
  templateUrl: './app.component.html',//su html
  styleUrls: ['./app.component.css'] //su css
})
export class AppComponent {
  title = 'my-app';
  //AQUÍ VA EL JAVASCRITP - la funcionaldiad del componente
  constructor()
  {
    console.log("ESTAMOS EN EL CONSTRUCTOR del APP component");
  }
}
