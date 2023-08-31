import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Persistence } from './Persistence.service';

@Injectable({
  providedIn: 'root',
})
export class BaseRequestService {
  basePatch = environment.API;
  constructor(private _http: HttpClient,private readonly _persistence$:Persistence) {}

  get(url): Observable<any> {
    const headers = this.httpOptions();
    return this._http.get(`${this.basePatch}${url}`, headers).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  getPromise(url): Promise<any> {
    const headers = this.httpOptions();

    return this._http
      .get(`${this.basePatch}${url}`, headers)
      .pipe(
        map((res) => {
          return res;
        }),
        catchError(this.handleError)
      )
      .toPromise();
  }

  post(url, data: any): Observable<any> {
    const headers = this.httpOptions();
    return this._http.post(`${this.basePatch}${url}`, data, headers).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  put(url: string, data: any): Observable<any> {
    const headers = this.httpOptions();
    return this._http.put(`${this.basePatch}${url}`, data, headers).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  delete(url: string): Observable<any> {
    const headers = this.httpOptions();
    return this._http.delete(`${this.basePatch}${url}`, headers).pipe(
      map((res) => {
        return res;
      }),
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }

  private httpOptions(): any {
    const headers = !!this._persistence$.get("token")
      ? new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', this._persistence$.get("token"))
      : new HttpHeaders().set('Content-Type', 'application/json');

    return { headers };
  }
}