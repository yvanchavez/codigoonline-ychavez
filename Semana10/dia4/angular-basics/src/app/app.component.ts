import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Mi primera app!";
  enlaces = ['Home','Contacto','Nosotros'];
  nombre = 'Yvan Chavez';
  autenticado = false;

  cambiarSesion(){
    this.autenticado = !this.autenticado;
  }
}
