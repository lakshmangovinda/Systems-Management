import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  goto(event){
    console.log(event.target.value);
    this.route.navigate(['/option', event.target.value])

  }
}
