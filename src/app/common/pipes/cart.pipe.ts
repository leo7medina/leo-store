import { PipeTransform, Pipe } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/Product';

@Pipe({
    name: 'cartrepeat'
})
export class CartPipe implements PipeTransform {

    products: Product[];

    constructor(
        private cartService: CartService
    ) {}

    transform(product: Product, arg?: any) {
        let total = 0;
        this.cartService.cart$.subscribe(products => {
            total = products.filter(item => item.id === product.id).length;
        });
        return total;
    }
}
