import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlBase = environment.url_api;

  private listProducts: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  addCart(product: Product) {
    this.listProducts = [...this.listProducts, product];
    this.cart.next(this.listProducts);
  }
}
