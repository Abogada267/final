import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { UtilService } from './util.service'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;

  url: string = '';

  constructor(
    private http: HttpClient,
    private UtilService: UtilService
  ) {
    this.url = this['utilService'].URL_BASE + '/usuarios/';
  }

  /* GET */
  obtenerUsuarios() {
    return this.http.get<Usuario[]>(this.url).pipe(
      catchError(this['utilService'].handleError)
    );
  }

  /* POST */
  guardarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario, this['utilService'].getHttpOptions()).pipe(
      catchError(this['utilService'].handleError)
    );
  }
}

export { UtilService };

