import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedAlumno: {
    alumnos: {
      id: number;
      name: string;
    }[];
    id: number;
    name: string;
  } | undefined;

  title = 'EstudioJuridicoMalvinaAramayo&Capacitaciones';
onSelect: any;
alumnos: any;
Alumnos: any;
}
