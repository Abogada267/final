import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  
  public URL_BASE: string = 'https://tu-api-base-url.com/api';

  constructor() { }

 
  public getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    };
  }


  public handleError(error: any): Observable<never> {
    console.error('Error:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
