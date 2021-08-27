import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutContactComponent } from './layout-contact/layout-contact.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutContactComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}
