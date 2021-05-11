import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }
name:string;
  ngOnInit(): void {
    this.route.params.subscribe(x =>{
this.name =x.name;
    });
  }
  new(){
    this.router.navigate(['new',this.name]);
  }
  view(){
    this.router.navigate(['view',this.name]);
  }
  list(){
    this.router.navigate(['/lablist'])
  }
}
