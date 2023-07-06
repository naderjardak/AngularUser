import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'Models/User';
import { Observable } from 'rxjs';
import {UsersRole} from "../../Models/UsersRole";
import {Role} from "../../Models/Role";

const options = { withCredentials: true };

@Injectable({
  providedIn: 'root'
})

export class ServiceAdminService {

  url = "http://localhost:8081/User/";

   urlgetUsers = "http://localhost:8081/user/users";
   urlDeleteUser="http://localhost:8081/user/delete/{id}?id=";
   urlUpdateUser="http://localhost:8081/user/update/{id}?id=";
   urlGetUserById="http://localhost:8081/user/user/{id}?id=";
   urlAddUser="http://localhost:8081/user/add?idRole=";
  Upload="http://localhost:8081/user/upload"
  UserRole="http://localhost:8081/user/StatsByRole"
  GetAllRoles="http://localhost:8081/user/getAllRoles"

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: User,role:number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<User>(this.urlAddUser+`${role}`, user,{headers});
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    const options = { withCredentials: true };
    return this.http.get<any[]>(this.urlgetUsers,{headers});
  }

  // Get User by Id - Read
  getUserById(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return  this.http.get<User>(this.urlGetUserById,{headers});
  }

  // Update User - Update
  updateUser(id: number,user: User){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<User>(this.urlUpdateUser +`${id}`,user,{headers});
  }

  // Delete User - Delete
  deleteUser(id: number){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<User>(this.urlDeleteUser +`${id}`,{headers});
  }


  upload(image: File | null | undefined)
  {
    const formData = new FormData();
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    // @ts-ignore
    formData.append('file', image, image.name);
    return this.http.post(this.Upload,formData,options);
  }

  UsersByRole()
  {const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<UsersRole[]>(this.UserRole,{headers});
  }


  getAllRoles()
  { const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
    return this.http.get<Role[]>(this.GetAllRoles,{headers});
  }
}
