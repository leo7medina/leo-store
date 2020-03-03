import {Component, Output, Input, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';
import { Product } from '../../../interfaces/Product';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();
    /*product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
    }*/
    constructor() {
        console.log('1. constructor');
    }

    /*ngOnChanges(changes: SimpleChanges) {
        console.log('2. OnChanges');
        console.log(changes);
    }*/

    ngOnInit() {
        console.log('3. OnInit');
    }

    ngDoCheck() {
        console.log('4. DoCheck');
    }

    ngOnDestroy() {
        console.log('5. OnDestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        this.productClicked.emit(this.product.id);
    }
}
