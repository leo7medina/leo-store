import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductEditComponent} from './product-edit/product-edit.component';

const routes: Routes = [
    { path: '', component: ProductListComponent},
    { path: 'create', component: ProductCreateComponent},
    { path: 'edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsAdmRoutingModule { }
