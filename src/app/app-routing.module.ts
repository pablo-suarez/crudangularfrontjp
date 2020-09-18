import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {path: '',component:ListaComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'formulario/:id', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
