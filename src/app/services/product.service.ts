import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../common/interfaces/product';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://api.sundancex.ru/products');
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://api.sundancex.ru/products/${id}`);
  }
}
