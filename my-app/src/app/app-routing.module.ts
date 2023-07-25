import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DniComponent } from './components/dni/dni.component';
import { AdivinaComponent } from './components/adivina/adivina.component';
import { PerroComponent } from './components/perro/perro.component';
import { CadenaComponent } from './components/cadena/cadena.component';
import { ChuckComponent } from './components/chuck/chuck.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { FormularioRestauranteComponent } from './components/formulario-restaurante/formulario-restaurante.component';
import { RestaurantePagComponent } from './components/restaurante-pag/restaurante-pag.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

//en este array de rutas, tengo que tener una ruta path
//asociado al componente
const routes: Routes = [
  {path:"dni", component: DniComponent},
  {path:"adivina", component: AdivinaComponent},
  {path:"perros", component: PerroComponent},
  {path:"cadena", component: CadenaComponent},
  {path:"chuck", component: ChuckComponent},
  {path:"restaurantes", component:RestaurantesComponent},
  {path:"restaurantespag" , component:RestaurantePagComponent},
  {path:"restaurantes/nuevo" , component: FormularioRestauranteComponent},
  {path:"busqueda" , component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
