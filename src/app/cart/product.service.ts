import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, delay, BehaviorSubject } from 'rxjs';
import { Product, ProductList } from './product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public addToCartSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public addToCartObs$: Observable<any> = new Observable();
  public productCartItems: Product[] = [];

  constructor(
    private http: HttpClient
  ) { 
    this.addToCartObs$ = this.addToCartSubject.asObservable();
  }

  getProductList(): Observable<any> {
    return of(ProductList);
  }
}
