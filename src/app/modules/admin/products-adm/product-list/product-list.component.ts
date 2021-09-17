import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  listProducts: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
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
        this.listProducts = products;
      }
    });
  }
  
  deleteProduct(id: string, index: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
      if (response) {
        console.log('index' + index);
        this.listProducts.splice(Number(index), 1);
        this.listProducts = [... this.listProducts = this.listProducts];
      }
    });
  }

}
