import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../share.module';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SharedModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
