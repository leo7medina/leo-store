import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {ProductFormExampleComponent} from './products-adm/product-form-example/product-form-example.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {MaterialModule} from '../material.module';
import {BasicFromComponent} from './basic-from/basic-from.component';
import {CategoriesModule} from './categories/categories.module';
import {ProductsAdmModule} from './products-adm/products-adm.module';

@NgModule({
  declarations: [
    ProductFormExampleComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    BasicFromComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    CategoriesModule,
    ProductsAdmModule

  ]
})
export class AdminModule { }
