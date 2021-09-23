import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'
import { ContactModule } from './contact/contact.module'
import { BannerComponent } from '../../components/banner/banner.component'
import { DemoComponent } from './demo/demo.component'
import { OrderComponent } from './order/order.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { SharedModule } from '../share.module'
import { CoreModule } from '../core.module'
import {CommonModule} from "@angular/common";
import {WebsiteRoutingModule} from './website-routing.module';
import { SearchComponent } from '../../components/search/search.component'

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    DemoComponent,
    OrderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class WebsiteModule { }
