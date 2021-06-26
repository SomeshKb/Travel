import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MaterialModule } from 'src/app/_exporter/material.module';
import { SharedModule } from 'src/app/_exporter/shared.module';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AuthenticationModule { }
