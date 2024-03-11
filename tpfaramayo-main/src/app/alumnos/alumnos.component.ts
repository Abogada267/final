import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumnos } from '../alumnos';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
  
export class AlumnosComponent implements OnInit{
  selectedAlumnos: Alumnos | undefined;

  selectalumnos: Alumnos | undefined;
  alumnos: Alumnos[]= [];

  constructor(private alumnosService: AlumnosService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAlumnos();
  }

  onSelect(alumnos: Alumnos): void {
    this.selectedAlumnos = alumnos;
    this.messageService.add(`AlumnosComponent: Selected alumnos id=${alumnos.id}`);
  }

  getAlumnos(): void {
    this.alumnosService.getAlumnos()
        .subscribe(alumnos => this.alumnos = alumnos);
  }
}