
import { Injectable } from '@angular/core';
import { Persona } from './../interfaces/persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  API_LINK = "http://127.0.0.1:8000/api";
  constructor(private httpClient:HttpClient) { }
  get(){
    return this.httpClient.get(this.API_LINK + '/personas');
  }
  save(persona:Persona){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_LINK + '/personas', persona, {headers:headers});
  }
  update(persona){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_LINK + '/personas/' + persona.id , persona, {headers:headers});
  }
  delete(id){
    return this.httpClient.delete(this.API_LINK + '/personas/' + id);
  }

}
