import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginModule} from "./login/login.module";
import {LoginComponent} from "./login/login.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import { VerifierTokenComponent } from './verifier-token/verifier-token.component';
import { NewPasswordComponent } from './new-password/new-password.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        LoginModule
    ],
    declarations: [
      SignUpComponent,
      LoginComponent,
      ForgetPasswordComponent,
      VerifierTokenComponent,
      NewPasswordComponent
    ]
})
export class AuthModule { }
