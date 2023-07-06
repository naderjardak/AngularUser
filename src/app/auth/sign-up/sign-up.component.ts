import {Component} from '@angular/core';
import {User} from "../../../../Models/User";
import {JwtHelperService} from "@auth0/angular-jwt";
import {LoginService} from "../AuthServices/login.service";
import {Router} from "@angular/router";
import {RoleType} from "../../../../Models/Enum/RoleType";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  form:any ={}
  loading = false;
  error = '';
  user:  User  = new User();
  role!:string;
  constructor(private jwtHelper:JwtHelperService,  public LoginUserService:LoginService,private router:Router ){}

  signUp()
  {
    this.LoginUserService.signUP(this.form).subscribe(data=>{ alert("Creation done") });
  }

}
