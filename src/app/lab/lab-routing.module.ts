import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LabListComponent } from "./lab-list/lab-list.component";

const routes: Routes = [{
     path: '', component:LabListComponent
   }];
   
@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
   })
   export class LabRouting { }


