import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successregister',
  templateUrl: './successregister.component.html',
  styleUrls: ['./successregister.component.css']
})
export class SuccessregisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
login(){
  this.router.navigate(["/login"]);
}
}
