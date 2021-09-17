import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {AdminGuard} from './guard/admin.guard';
import { PreloadService } from './services/preload.service'
import { QuicklinkStrategy } from 'ngx-quicklink'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule) },
  { path: 'login', loadChildren: () => import('./modules/session/session.module').then(m => m.SessionModule) },
  /**{
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', loadChildren: () => import('./modules/website/website.module').then(m => m.WebsiteModule) },
      /!*{ path: 'home', loadChildren: () => import('./modules/website/home/home.module').then(m => m.HomeModule), data: { preload: true} },
      { path: 'products-adm', loadChildren: () => import('./modules/website/products-adm/product.module').then(m => m.ProductModule), data: { preload: true} },
      { path: 'contact', loadChildren: () => import('./modules/website/contact/contact.module').then(m => m.ContactModule) },
      { path: 'order', loadChildren: () => import('./modules/website/order/order.module').then(m => m.OrderModule) },
      { path: 'demo', canActivate: [AdminGuard], loadChildren: () => import('./modules/website/demo/demo.module').then(m => m.DemoModule)  },*!/
    ]
  },*/
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
