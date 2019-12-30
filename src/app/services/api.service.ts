import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { furnitureParams } from '../models/furnitureParams';
import { categoryParams } from '../models/categoryParams';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  token: string = '';
  categoryList = [];
  apiBase: string = 'http://localhost:8000';

  private buildHttpParams(params) {
    const httpParams = {};
    const keys = Object.keys(params);

    for (let i = 0; i < keys.length; i++) {
      httpParams[keys[i]] = params[keys[i]];
    }

    return httpParams;
  }

  private getHttpHeaders() {
    let header = {};

    if (this.token.toString().length > 0) {
      header['Authorization'] = "Bearer " + this.token.toString();
    }

    return header;
  }

  private getHttpOptions(params: any) {
    return {
      params: this.buildHttpParams(params),
      headers: this.getHttpHeaders()
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  getFurnitureList(): Observable<furnitureParams[]> {
    return this.http.get<furnitureParams[]>(this.apiBase + '/furniture');
  }

  getCategoryList(): Observable<categoryParams[]> {
    return this.http.get<categoryParams[]>(this.apiBase + '/categories', this.getHttpOptions({}));
  }

}
