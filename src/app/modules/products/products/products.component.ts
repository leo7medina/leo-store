import { Component, OnInit } from '@angular/core';
import {Product} from '../../../interfaces/Product';
import { ProductsService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  descriptionGeneral = 'bla bla bla bla bla';
  products: Product[] = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(products => {
      console.log(products);
      if (products) {
        this.products = products;
      }
    });
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
