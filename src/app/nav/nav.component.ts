import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../apiservice/api.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public guard: ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  istoggel = false;
  navtoggle() {
    console.log(this.istoggel);
    this.istoggel = !this.istoggel;

}
logout(){
  this.guard.logout();

  this.router.navigate(['/login']);

}
}