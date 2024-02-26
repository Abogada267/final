import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public URL_BASE: string = 'https://tu-api-base-url.com/api';

  constructor() { }

  public getHttpOptions(): { headers: HttpHeaders } {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  public handleError(error: HttpErrorResponse): Observable<never> {
    console.error('Error:', error);

    let errorMessage = 'Something went wrong. Please try again later.';

    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      errorMessage = `Client error: ${error.error.message}`;
    } else if (error.status === 0) {
      // El servidor no está disponible
      errorMessage = 'Server not available. Please check your internet connection.';
    } else {
      // Error del servidor
      errorMessage = `Server error (status ${error.status}): ${error.error}`;
    }

    return throwError(errorMessage);
  }
}

