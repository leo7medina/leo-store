import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {ExponentialPipe} from '../pipes/exponential.pipe';
import {HighlightDirective} from '../directives/highlight.directive';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartPipe } from '../pipes/cart.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    CartPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    ExponentialPipe,
    CartPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
