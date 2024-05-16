import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    CommonComponentsModule,
    NgOtpInputModule,
  ]
})
export class AuthenticationModule { }
