import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginInfo} from "../../../../Models/login-info";
import {User} from "../../../../Models/User";
import {Observable} from "rxjs";

const httpOptions ={
  headers :new HttpHeaders({'Content-Type':'application/json'})
};

const httpOptions1 ={
  withCredentials:true,responseType:'text'
};
const options = { withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Login="http://localhost:8081/authentication/auth"
  SignUp="http://localhost:8081/user/addUser"

  urlCheckEmail="http://localhost:8081/ForgetPassword/checkEmail";
  urlCheckCode="http://localhost:8081/ForgetPassword/resetPassword?resetToken=";
  urlChangePassword="http://localhost:8081/ForgetPassword/changePass?resetToken=";


  ForgetPass(resetPassword:string):Observable<string>{
    return this.http.post<any>(this.urlCheckEmail,{email : resetPassword},httpOptions);
  }

  checkCode(resetToken:string){
    return this.http.get<string>(this.urlCheckCode +`${resetToken}`,httpOptions).pipe();
  }

  changePassword(resetToken:string,Password:string){
    return this.http.get<string>(this.urlChangePassword +`${resetToken}`+'&Password=' +`${Password}`,httpOptions);
  }


  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(this.Login, {
      login: email,
      password: password
    }, httpOptions);
  }

  signUP(user:User)
  {
    return this.http.post(this.SignUp,user,httpOptions);
  }
}
