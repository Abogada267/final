import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Alumnos } from '../alumnos';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-alumnos-search',
  templateUrl: './alumnos-search.component.html',
  styleUrls: [ './alumnos-search.component.css' ]
})
export class AlumnosSearchComponent implements OnInit {
  alumnos$!: Observable<Alumnos[]>;
  private searchTerms = new Subject<string>();

  constructor(private AlumnosService: AlumnosService) {}

  
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.alumnos$ = this.searchTerms.pipe(
     
      debounceTime(300),

     
      distinctUntilChanged(),

    
      switchMap((term: string) => this.AlumnosService.searchAlumnos(term)),
    );
  }
}

