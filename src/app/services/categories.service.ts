import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Category} from '../interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    return this.http.get<Category[]>(`${environment.url_api2}/categories/`);
  }

  createCategory(data: Partial<Category>) {
    return this.http.post<Category>(`${environment.url_api2}/categories/`, data);
  }

  updateCategory(id: string, data: Partial<Category>) {
    return this.http.put<Category>(`${environment.url_api2}/categories/${id}`, data);
  }

  checkCategory(name: string) {
    return this.http.post(`${environment.url_api2}/categories/availability`, {name});
  }

}
