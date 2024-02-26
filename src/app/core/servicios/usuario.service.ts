import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';  
import { Usuario } from '../../interfaces/usuario';
import { UtilService } from './util.service'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = '';

  constructor(
    private http: HttpClient,
    private utilService: UtilService  
  ) {
    this.url = this.utilService.URL_BASE + '/usuarios/';
  }

  /* GET */
  obtenerUsuarios(): Observable<Usuario[]> {  
    return this.http.get<Usuario[]>(this.url).pipe(
      catchError(error => throwError(() => error))  
    );
  }

  /* POST */
  guardarUsuario(usuario: Usuario): Observable<Usuario> {  
    return this.http.post<Usuario>(this.url, usuario, this.utilService.getHttpOptions()).pipe(
      catchError(error => throwError(() => error))  
    );
  }
}

export { UtilService };

