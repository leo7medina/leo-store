import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'product/create',
        component: FormProductComponent
      },
      {
        path: 'product/edit/:id',
        component: ProductEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
