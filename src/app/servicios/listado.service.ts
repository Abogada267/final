import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Pelicula } from '../interfaces/peliculas';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  private url: string = '';

  constructor(
    private http: HttpClient,
    @Inject(UtilService) private utilService: UtilService
  ) {
    this.url = `${this.utilService.URL_BASE}/peliculas`;
  }

  /* GET */
  obtenerPeliculas(id?: string) {
    return this.http.get<Pelicula[]>(`${this.url}/${id || ''}`).pipe(
      catchError(this.utilService.handleError)
    );
  }

  /* POST */
  guardarPelicula(pelicula: Pelicula) {
    return this.http.post<Pelicula>(this.url, pelicula, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    );
  }

  /* PUT */
  actualizarPelicula(pelicula: Pelicula, id: string) {
    return this.http.put<Pelicula>(`${this.url}/${id}`, pelicula, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    );
  }

  /* DELETE */
  borrarPelicula(id: string) {
    return this.http.delete<Pelicula>(`${this.url}/${id}`).pipe(
      catchError(this.utilService.handleError)
    );
  }
}
