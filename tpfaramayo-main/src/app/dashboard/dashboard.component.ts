import { Component, OnInit } from '@angular/core';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  alumnos: Alumnos[] = [];

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
      .subscribe((Alumnos: string | any[]) => this.alumnos= this.alumnos.slice(1, 5));
  }
}