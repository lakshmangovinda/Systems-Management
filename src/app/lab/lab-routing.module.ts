import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../apiservice/auth.guard";
import { EditSystemComponent } from "../edit-system/edit-system.component";
import { HomeComponent } from "../home/home.component";
import { NewSystemComponent } from "../new-system/new-system.component";
import { OptionComponent } from "../option/option.component";
import { ViewSystemsComponent } from "../view-systems/view-systems.component";
import { LabListComponent } from "./lab-list/lab-list.component";

const routes: Routes = [
  {
     path: '', component:HomeComponent,canActivate: [AuthGuard] },
     {
path:'lablist',component:LabListComponent,canActivate: [AuthGuard] 
     },
    {
      path: 'option/:name', component:OptionComponent,canActivate: [AuthGuard] 
    },
    {
      path: 'new/:name', component:NewSystemComponent,canActivate: [AuthGuard] 
    },
    {
      path: 'view/:name', component:ViewSystemsComponent,canActivate: [AuthGuard] 
    },{
      path:'edit/:name/:id',component:EditSystemComponent,canActivate: [AuthGuard] 
    }
];
   
@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
   })
   export class LabRouting { }


