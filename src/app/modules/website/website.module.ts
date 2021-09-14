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

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    DemoComponent,
    OrderComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    ContactModule,
    ReactiveFormsModule,
  ]
})
export class WebsiteModule { }
