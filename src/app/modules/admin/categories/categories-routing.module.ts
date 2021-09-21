import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategorysComponent} from './categorys/categorys.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import { CategoryContainerSmartComponent } from './category-container-smart/category-container-smart.component'

const routes: Routes = [
  { path: '', component: CategorysComponent },
  { path: 'create', component: CategoryContainerSmartComponent },
  { path: 'edit/:id', component: CategoryContainerSmartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
