import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {ExponentialPipe} from '../common/pipes/exponential.pipe';
import {HighlightDirective} from '../common/directives/highlight.directive';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPipe } from '../common/pipes/cart.pipe';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe} from '../common/pipes/fibonacci.pipe'

@NgModule({
  declarations: [
    ExponentialPipe,
    CartPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ],
  exports: [
    ExponentialPipe,
    CartPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule,
  ]
})
export class SharedModule { }
