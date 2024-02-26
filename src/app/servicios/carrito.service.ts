import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from 'redux';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Carrito } from '../interfaces/carrito';
import { Appstate } from '../state/videoclub.state';
import { AppStore } from '../state/videoclub.store';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url: string = '';

  constructor(
    private http: HttpClient,
    @Inject(UtilService) private utilService: UtilService, // Añadido @Inject
    @Inject(AppStore) private store: Store<Appstate> // Añadido @Inject
  ) { 
    this.url = this.utilService.URL_BASE + '/carrito/';
  }

  /* GET */
  obtenerCarrito() {
    return this.http.get<Carrito[]>(this.url).pipe(
      catchError(this.utilService.handleError)
    );
  }

  /* POST */
  enviarCarrito() {
    const state: Appstate = this.store.getState();
    return this.http.post<Carrito>(this.url, { usuario: state.usuario, carrito: state.carrito }, this.utilService.getHttpOptions()).pipe(
      catchError(this.utilService.handleError)
    );
  }
}
