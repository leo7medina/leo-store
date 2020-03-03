import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';

import { ContactRoutingModule } from './contact-routing.module';
import {SharedModule} from '../share.module';


@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule {

}
