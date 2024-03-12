import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Alumnos } from './alumnos';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class AlumnosService {
  private alumnosUrl = 'api/alumnos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  addAlumnos: any;
  deleteAlumnos: any;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAlumnos(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(this.alumnosUrl)
      .pipe(
        tap(_ => this.log('fetched alumnos')),
        
      );
  }

  getAlumnosNo404<Data>(id: number): Observable<Alumnos> {
    const url = `${this.alumnosUrl}/?id=${id}`;
    return this.http.get<Alumnos[]>(url)
      .pipe(
        map(alumnos => alumnos[0]),
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} alumnos id=${id}`);
        }),
     
      );
  }

  getAlumno(id: number): Observable<Alumnos> {
    const url = `${this.alumnosUrl}/${id}`;
    return this.http.get<Alumnos>(url).pipe(
      tap(_ => this.log(`fetched alumno id=${id}`)),
  
    );
  }

  searchAlumnos(term: string): Observable<Alumnos[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Alumnos[]>(`${this.alumnosUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found alumnos matching "${term}"`) :
         this.log(`no alumnos matching "${term}"`)),
      
    );
  }

  addAlumno(alumno: Alumnos): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.alumnosUrl, alumno, this.httpOptions).pipe(
      tap((newAlumno: Alumnos) => this.log(`added alumno w/ id=${newAlumno.id}`)),
      catchError((error: any) => this.handleError<Alumnos>('addAlumno', error))
    );
  }

  deleteAlumno(alumno: Alumnos | number): Observable<Alumnos> {
    const id = typeof alumno === 'number' ? alumno : alumno.id;
    const url = `${this.alumnosUrl}/${id}`;

    return this.http.delete<Alumnos>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted alumno id=${id}`)),
      catchError((error: any) => this.handleError<Alumnos>('deleteAlumno', error))
    );
  }

  updateAlumno(alumno: Alumnos): Observable<any> {
    return this.http.put(this.alumnosUrl, alumno, this.httpOptions).pipe(
      tap(_ => this.log(`updated alumno id=${alumno.id}`)),
      catchError((error: any) => this.handleError<any>('updateAlumno', error))
    );
  }

  private handleError<T>(operation = 'operation', error: any): Observable<T> {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(error as T);
  }

  private log(message: string) {
    this.messageService.add(`AlumnosService: ${message}`);
  }
}
