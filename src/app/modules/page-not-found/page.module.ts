import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './404/page-not-found.component';

import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../share.module';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule
  ]
})
export class PageModule {

}
