import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import {SharedModule} from '../../share.module';
import { LayoutContactComponent } from './layout-contact/layout-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { MaterialModule } from '../../material.module'
import { FormsModule } from '@angular/forms'
import {MatLegacyChipsModule} from '@angular/material/legacy-chips';


@NgModule({
  declarations: [
    LayoutContactComponent,
    ListContactComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ContactRoutingModule,
        MaterialModule,
        MatLegacyChipsModule
    ]
})
export class ContactModule {

}
