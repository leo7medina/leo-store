import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/producto.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../share.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule {

}
