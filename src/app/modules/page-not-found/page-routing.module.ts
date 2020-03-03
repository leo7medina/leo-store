import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './404/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
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
export class PageRoutingModule {}
