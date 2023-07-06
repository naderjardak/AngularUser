import { Component } from '@angular/core';
import {User} from "../../../../Models/User";
import {LoginService} from "../AuthServices/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-verifier-token',
  templateUrl: './verifier-token.component.html',
  styleUrls: ['./verifier-token.component.css']
})
export class VerifierTokenComponent {


  public token:string=' ';


  constructor( private ServiceForgetPass:LoginService ,private router:Router ,private route: ActivatedRoute){

  }

  user:  User  = new User();
  form:any ={}

  goToLogin()
  {
    this.router.navigate(['/auth/login']);
  }

  verifyCode(){
    this.ServiceForgetPass.checkCode(this.form.token).subscribe((data: any) => {
        if (data.isValidToken) {
          this.router.navigate(['/auth/newPass/'+this.form.token]);
        } else {
          alert("Invalid Code Try Again Please")
        }
      }

    )
  };


}
