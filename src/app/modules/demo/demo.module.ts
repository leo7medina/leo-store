import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo/demo.component';

import { DemoRoutingModule } from './demo-routing.module';
import {SharedModule} from '../share.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule {

}
