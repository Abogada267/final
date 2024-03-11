import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss',
})
  
export class AlumnosComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Detalles de Alumnos';
  alumnos: Alumnos[] = [
    { id: 1, name: 'Nombre1', edad: 20 },
    { id: 2, name: 'Nombre2', edad: 22 },
    
  ];

  selectedAlumno: Alumnos | undefined;

  onSelect(alumno: Alumnos): void {
    this.selectedAlumno = alumno;
  }
}
