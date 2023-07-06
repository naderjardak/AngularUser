import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DialogModule} from "primeng/dialog";
import {JwtModule} from '@auth0/angular-jwt';
import {AddUserComponent} from "./add-user/add-user.component";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RatingModule} from "primeng/rating";
import {TableModule} from "primeng/table";
import {RouterModule} from "@angular/router";
import {SliderModule} from "primeng/slider";
import {BrowserModule} from "@angular/platform-browser";
import {InputTextModule} from "primeng/inputtext";
import {ToggleButtonModule} from "primeng/togglebutton";
import {MultiSelectModule} from "primeng/multiselect";
import {ProgressBarModule} from "primeng/progressbar";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {InputMaskModule} from "primeng/inputmask";
import {PasswordModule} from "primeng/password";
import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "primeng/carousel";
import {CardModule} from "primeng/card";
import {TimelineModule} from "primeng/timeline";
import {MenuModule} from "primeng/menu";
import {MenubarModule} from "primeng/menubar";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ButtonModule} from "primeng/button";
import {ChartModule} from "primeng/chart";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {AppLayoutModule} from "./layoutB/app.layout.module";

@NgModule({
    declarations: [
        AppComponent,
        AddUserComponent,
      UserDashboardComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      AppLayoutModule,
      FormsModule,
      RouterModule,
      BrowserAnimationsModule,
      FormsModule,
      TableModule,
      RatingModule,
      SliderModule,
      InputTextModule,
      ToggleButtonModule,
      RippleModule,
      MultiSelectModule,
      DropdownModule,
      ProgressBarModule,
      ToastModule,
      TableModule,
      FileUploadModule,
      FormsModule,
      ButtonModule,
      RippleModule,
      ToastModule,
      ToolbarModule,
      RatingModule,
      InputTextModule,
      InputTextareaModule,
      DropdownModule,
      RadioButtonModule,
      InputNumberModule,
      DialogModule,
      CommonModule,
      FormsModule,
      AutoCompleteModule,
      CalendarModule,
      ChipsModule,
      DropdownModule,
      InputMaskModule,
      InputNumberModule,
      CascadeSelectModule,
      MultiSelectModule,
      PasswordModule,
      InputTextareaModule,
      InputTextModule,
      HttpClientModule,
      CarouselModule,
      ChartModule,
      CardModule,
      TimelineModule,
      MenuModule,
      MenubarModule,
      ButtonModule,
      BreadcrumbModule,
        AppRoutingModule,
        AppLayoutModule,
        DialogModule,
        JwtModule.forRoot({
          config:{
            tokenGetter: ()=>{
              return localStorage.getItem('token');
            },
            allowedDomains:['localhost']
          }
        })
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
