import {NgModule} from '@angular/core';
import {CategorysComponent} from './categorys/categorys.component';
import {CategoryFormComponent} from './category-form/category-form.component';
import {CommonModule} from '@angular/common';
import {CategoriesRoutingModule} from './categories-routing.module';
import {MaterialModule} from '../../material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CategorysComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule { }
