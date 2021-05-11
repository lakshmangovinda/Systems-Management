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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { SuccessregisterComponent } from './successregister/successregister.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuard } from './apiservice/auth.guard';
import { RouteGuard } from './apiservice/route.guard';
import { LabModule } from './lab/lab.module';
import { OptionComponent } from './option/option.component';
import { ViewSystemsComponent } from './view-systems/view-systems.component';
import { NewSystemComponent } from './new-system/new-system.component';
import { EditSystemComponent } from './edit-system/edit-system.component';


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
    SuccessregisterComponent,
    OptionComponent,
    ViewSystemsComponent,
    NewSystemComponent,
    EditSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    LabModule,
    FormsModule
  ],
  providers: [AuthGuard,RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
