import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabRouting } from './lab-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [LabListComponent],
  imports: [
    CommonModule,
    LabRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LabModule { }
