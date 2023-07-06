import {Component, OnInit} from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {LoginService} from "../AuthServices/login.service";
import {User} from "../../../../Models/User";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements  OnInit {

  form:any ={}
  loading = false;
  error = '';
  user:  User  = new User();
  role!:string;
  constructor(private jwtHelper:JwtHelperService,  public LoginUserService:LoginService,private router:Router ){}
  ngOnInit() {

  }

  goToForget()
  {
    this.router.navigate(['/auth/check']);
  }


  userLogin(){
    this.loading =true;
    this.LoginUserService.login(this.form.email,this.form.password).subscribe((response:any)=>{
      localStorage.setItem('token',response.accessToken)
      let decodedToken = this.jwtHelper.decodeToken(response.accessToken)
      let role = decodedToken.role[0];
      if (role == 'ADMINISTRTOR') {
        this.router.navigate(['/addUser']);
      } else if (role == 'INSCRIT') {
        this.router.navigate(['/INSCRIT']);
      }
    },(error) =>{
      if(error.error){
        console.log(error)
      }
    })
  }

    valCheck: string[] = ['remember'];

}
