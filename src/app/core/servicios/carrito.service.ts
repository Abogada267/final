import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Carrito } from '../../interfaces/carrito';
import { Appstate } from '../../state/videoclub.state';
import { Store } from 'redux';
import { UtilService } from './util.service';

type AppStore = Store<Appstate>;

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private url: string = '';

  constructor(
    private http: HttpClient,
    private utilService: UtilService,
    @Inject('AppStoreToken') private store: AppStore  
  ) { 
    this.url = `${this.utilService.URL_BASE}/carrito`;
  }

  /* GET */
  obtenerCarrito() {
    return this.http.get<Carrito[]>(this.url).pipe(
      catchError(this.handleError.bind(this))  
    );
  }

  /* POST */
  enviarCarrito() {
    const state: Appstate = this.store.getState();
    return this.http.post<Carrito>(this.url, { usuario: state.usuario, carrito: state.carrito }, this.utilService.getHttpOptions()).pipe(
      catchError(this.handleError.bind(this))  
    );
  }

  private handleError(error: any) {
    
    return throwError(() => error);
  }
}
