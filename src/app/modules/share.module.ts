import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {ExponentialPipe} from '../pipes/exponential.pipe';
import {HighlightDirective} from '../directives/highlight.directive';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
