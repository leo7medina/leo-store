import { Component, OnInit } from '@angular/core';
import {Product} from '../../../interfaces/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  descriptionGeneral = 'bla bla bla bla bla';
  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/262189.jpg',
      title: 'Camiseta',
      price: 80000,
      description: this.descriptionGeneral
    },
    {
      id: '2',
      image: 'assets/images/lec-pilotkeyart-1-1532372009.jpg',
      title: 'Hoodie',
      price: 90000,
      description: this.descriptionGeneral
    },
    {
      id: '3',
      image: 'assets/images/los-originales-18.jpg',
      title: 'Mug',
      price: 10000,
      description: this.descriptionGeneral
    },
    {
      id: '4',
      image: 'assets/images/theOriginals.jpg',
      title: 'Pin',
      price: 50000,
      description: this.descriptionGeneral
    },
    {
      id: '5',
      image: 'assets/images/The-Vampire-Diaries-temporada-3.jpg',
      title: 'Stickers',
      price: 40000,
      description: this.descriptionGeneral
    },
    {
      id: '6',
      image: 'assets/images/threeSeries.jpg',
      title: 'Stickers',
      price: 40000,
      description: this.descriptionGeneral
    },
  ];

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
