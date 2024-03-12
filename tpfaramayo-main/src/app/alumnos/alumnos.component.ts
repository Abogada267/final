import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumnos } from '../alumnos';
import { ALUMNOS } from '../mock-alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
  
export class AlumnosComponent implements OnInit {
  alumnos: Alumnos[] = [];

  constructor(private alumnosService: AlumnosService) {
    this.alumnos = ALUMNOS;
  }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe(
        (alumnos) => {
          this.alumnos = alumnos;
        },
        (error) => {
          console.error('Error fetching alumnos:', error);
        }
      );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    
    this.alumnosService.addAlumnos({ name } as Alumnos)
      .subscribe((newAlumno: Alumnos) => {
        this.alumnos.push(newAlumno);
      });
  }

  delete(alumno: Alumnos): void {
    this.alumnos = this.alumnos.filter(a => a !== alumno);

    // Assuming deleteAlumnos returns an observable
    this.alumnosService.deleteAlumnos(alumno)
      .subscribe(
        () => {
          // Handle successful deletion if needed
        },
        (error: any) => {
          console.error('Error deleting alumno:', error);
        }
      );
  }
}
