

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../interfaces/persona';
import { PersonaService } from '../services/persona.service';
import { ListaComponent } from './../lista/lista.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona: Persona={
    names:null,
    lastnames: null,
    telephone: null,
    email: null,
    address: null

  };
  id:any;
  editar: boolean=false;
  personas: Persona[];
  constructor(private personaService:PersonaService,private activatedRoute:ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.editar=true;
      this.personaService.get().subscribe((data: Persona[])=>{

        this.personas=data;
        this.persona=this.personas.find((m)=>{return m.id == this.id});
      },(error)=>{});
    }else{
      this.editar=false;
    }

   }

  ngOnInit() {
  }
  savePersona(){
    if(this.editar){
      this.personaService.update(this.persona).subscribe((data)=>{
        alert('Datos Actualizados');


      },(error)=>{
        alert('Error');
        console.log(error);
      });
    }else{
      this.personaService.save(this.persona).subscribe((data)=>{
        alert('Datos guardados');


      },(error)=>{
        alert('Error');
        console.log(error);
      });
    }


  }
}
