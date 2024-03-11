import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumnos } from '../../alumnos';
import { AlumnosService } from '../../alumnos.service';

@Component({
  selector: 'app-alumnos-detail',
  templateUrl: './alumnos-detail.component.html',
  styleUrls: ['./alumnos-detail.component.scss'],
})
export class AlumnosDetailComponent implements OnInit {
  @Input() alumno: Alumnos | undefined;

  constructor(
    private route: ActivatedRoute,
    private alumnosService: AlumnosService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null && idParam !== undefined) {
      const id = +idParam;
      this.alumnosService.getAlumno(id)
        .subscribe(
          (alumno: Alumnos | undefined) => this.alumno = alumno,
          (error: any) => console.error('Error fetching alumno:', error)
        );
    } else {
      // Manejo si 'id' es null o undefined, dependiendo de tus necesidades
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.alumno) {
      this.alumnosService.updateAlumno(this.alumno)
        .subscribe(
          () => this.goBack(),
          (error: any) => console.error('Error updating alumno:', error)
        );
    }
  }
}
