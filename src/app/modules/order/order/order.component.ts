import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductsService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  listProduct$: Observable<Product[]>;

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.listProduct$ = this.cartService.cart$.pipe(
      map((productos:[]) => {
        const distintos = [...new Set(productos)];
        return distintos;
      })
    );
   }

  ngOnInit(): void {
  }

}
