import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductFormExampleComponent } from './products-adm/product-form-example/product-form-example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ProductListComponent } from './products-adm/product-list/product-list.component';
import { ProductCreateComponent } from './products-adm/product-create/product-create.component';
import { ProductEditComponent } from './products-adm/product-edit/product-edit.component';
import { BasicFromComponent } from './basic-from/basic-from.component'
import {CategorysComponent} from './categories/categorys/categorys.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'create', component: ProductFormExampleComponent },
      { path: '', component: DashboardComponent },
      { path: 'table', component: TableComponent },
      /**{ path: 'product-list', component: ProductListComponent },
      { path: 'product/create', component: ProductCreateComponent },
      { path: 'product/edit/:id', component: ProductEditComponent },*/
      { path: 'basic-form', component: BasicFromComponent },
      { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
      { path: 'product-list', loadChildren: () => import('./products-adm/products-adm.module').then(m => m.ProductsAdmModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
