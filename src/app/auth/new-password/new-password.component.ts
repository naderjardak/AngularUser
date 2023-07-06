import { Component } from '@angular/core';
import {User} from "../../../../Models/User";
import {LoginService} from "../AuthServices/login.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {

  public tok:string="";

  constructor( private ServiceForgetPass:LoginService ,private router:Router ,private route: ActivatedRoute){

  }
  token:string="";
  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
    //console.log('token ='+this.verif.token)

  }
  user:  User  = new User();
  form:any ={}


  goToLogin()
  {
    this.router.navigate(['/auth/login']);
  }

  changePassword(){

    this.ServiceForgetPass.changePassword(this.token, this.form.password).subscribe(
      data => {

        alert(data);

      },
      error => {
        console.error(error);
        // Handle the error here.
      }
    );
    this.router.navigate(['/auth/login'])
  }
}
