import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabRouting } from './lab-routing.module';
@NgModule({
  declarations: [LabListComponent],
  imports: [
    CommonModule,
    LabRouting
  ]
})
export class LabModule { }
