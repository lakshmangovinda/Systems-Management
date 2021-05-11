import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './apiservice/auth.guard';
import { RouteGuard } from './apiservice/route.guard';
import { HomeComponent } from './home/home.component';
import { LabModule } from './lab/lab.module';
import { LoginComponent } from './login/login.component';
import { NotadminComponent } from './notadmin/notadmin.component';
import { RegisterComponent } from './register/register.component';
import { SuccessregisterComponent } from './successregister/successregister.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',   component: LoginComponent,canActivate:[RouteGuard]  },
  { path: 'admin',  component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'user',   component: UserComponent, canActivate: [AuthGuard] },
  { path: 'notadmin',   component: NotadminComponent, canActivate: [AuthGuard] },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register',   component: RegisterComponent,canActivate:[RouteGuard]},
  { path: 'successregister',   component: SuccessregisterComponent,canActivate: [AuthGuard]},
  {path: 'lablist', loadChildren:'./lab/lab.module#LabModule'},
  {path: 'option/:name', loadChildren:'./lab/lab.module#LabModule'},
  {path: 'new/:name', loadChildren:'./lab/lab.module#LabModule'},
  {path: 'view/:name', loadChildren:'./lab/lab.module#LabModule'},
  {path: 'edit/:name/:id', loadChildren:'./lab/lab.module#LabModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,LabModule]
})
export class AppRoutingModule { }
