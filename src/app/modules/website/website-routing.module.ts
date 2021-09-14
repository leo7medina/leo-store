import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LayoutComponent } from '../../components/layout/layout.component'
import { ProductsComponent } from './products/products/products.component'
import { DemoComponent } from './demo/demo.component'
import {OrderComponent} from './order/order.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'demo', component: DemoComponent },
      { path: 'order', component: OrderComponent },
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'products', loadChildren: () => import('./products/product.module').then(m => m.ProductModule) }

    ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class WebsiteRoutingModule { }
