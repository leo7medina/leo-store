import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {HomeComponent} from './modules/home/home/home.component';
import {ProductsComponent} from './modules/products/products/products.component';
import {ContactComponent} from './modules/contact/contact/contact.component';
import {PageNotFoundComponent} from './modules/page-not-found/404/page-not-found.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AdminGuard} from './guard/admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./modules/products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-not-found/page.module').then(m => m.PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
