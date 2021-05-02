import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { NotadminComponent } from './notadmin/notadmin.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SuccessregisterComponent } from './successregister/successregister.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './apiservice/auth.guard';
import { RouteGuard } from './apiservice/route.guard';
import { LabModule } from './lab/lab.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    NotadminComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    SuccessregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    LabModule
  ],
  providers: [AuthGuard,RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
