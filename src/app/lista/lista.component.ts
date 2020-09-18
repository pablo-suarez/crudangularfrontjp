import { Persona } from './../interfaces/persona';

import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../services/persona.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  personas: Persona[];

  constructor(private personaService: PersonaService) {
    this.getPersonas();
   }

getPersonas(){
  this.personaService.get().subscribe((data: Persona[])=>{
    this.personas = data;
  },(error)=>{
    alert('error!');
    console.log(error);
  });
}

  ngOnInit() {

  }

  delete(id){
    if(confirm('Quires borrar este registro?')){
      this.personaService.delete(id).subscribe((data)=>{
        alert('Aliminación exitosa');
        this.getPersonas();
      },(error)=>{
        alert('Error Eliminando');
        console.log(error);
      })
    }
  }


}
