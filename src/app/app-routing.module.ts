import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {ErrorComponent} from "./auth/error/error.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AppLayoutComponent} from "./layoutB/app.layout.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";

const routes: Routes = [

  { path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path:'',component:AppLayoutComponent,
    children:[
      {path:'',component:UserDashboardComponent},
      {path:'addUser',component:AddUserComponent}
    ]
  },
  { path:'**', redirectTo: '/notfound' }]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
