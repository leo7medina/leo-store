import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {CommonModule} from '@angular/common';
import {ProductsAdmRoutingModule} from './products-adm.routing.module';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductCreateComponent} from './product-create/product-create.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsAdmRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProductsAdmModule { }
