import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SessionRoutingModule,
    MaterialModule
  ]
})
export class SessionModule { }
