import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AdminGuard} from './guard/admin.guard';
import { PreloadService } from './services/preload.service'
import { QuicklinkStrategy } from 'ngx-quicklink'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/session/session.module').then(m => m.SessionModule) },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), data: { preload: true} },
      { path: 'products', loadChildren: () => import('./modules/products/product.module').then(m => m.ProductModule), data: { preload: true} },
      { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
      { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import('./modules/demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  { path: 'admin',  canActivate: [AdminGuard], loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', loadChildren: () => import('./modules/page-not-found/page.module').then(m => m.PageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: QuicklinkStrategy,
    paramsInheritanceStrategy: 'always',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
