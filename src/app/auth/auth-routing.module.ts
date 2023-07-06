import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";
import {VerifierTokenComponent} from "./verifier-token/verifier-token.component";
import {NewPasswordComponent} from "./new-password/new-password.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
        { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
        { path: 'login', component:LoginComponent },
        { path: 'check', component:ForgetPasswordComponent},
        { path: 'verificationCode', component:VerifierTokenComponent},
        { path: 'newPass/:token', component:NewPasswordComponent},
        { path: 'signUp', component: SignUpComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
