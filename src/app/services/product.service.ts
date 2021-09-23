import { Injectable } from '@angular/core';
import {Product} from '../interfaces/Product';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //urlBase = environment.url_api;
  urlBase = environment.url_api2;

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.urlBase}/products/`);
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.urlBase}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${this.urlBase}/products/`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${this.urlBase}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.urlBase}/products/${id}`);
  }
}
