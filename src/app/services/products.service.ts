import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService  {
  productsUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {  }

  getAllProducts(): Observable<Array<any>> {
      return this.http.get<any>(`${this.productsUrl}`).pipe(
        catchError(this.handleError)
      )
    
  }

  private handleError(error: any) {
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }

    return throwError(error || 'Server error');
  }

}

