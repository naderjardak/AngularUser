import { Component } from '@angular/core';
import {LoginService} from "../AuthServices/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  constructor(public services:LoginService,private router:Router) {
  }

  form:any={};

  checkEmail(){
    this.services.ForgetPass(this.form.email).subscribe()
    {
      this.router.navigate(['/auth/verificationCode']);

    };
  };

  goToLogin()
  {
    this.router.navigate(['/auth/login']);
  }
}
