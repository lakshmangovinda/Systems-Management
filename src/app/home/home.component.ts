import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
sret(){
  window.location.href='http://www.sreerama.ac.in/srec/index.html'
}
sres(){
  window.open('http://www.sreerama.ac.in/sres/index.html')
}
}
