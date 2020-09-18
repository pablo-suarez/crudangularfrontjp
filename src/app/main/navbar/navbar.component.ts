import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

rutas = [
  {
    name: 'Lista',
    path: '/lista'
  },
  {
    name: 'Registrar',
    path: '/formulario'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
