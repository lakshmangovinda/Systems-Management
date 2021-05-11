import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'
import { ApiService } from '../apiservice/api.service';


@Component({
  selector: 'app-new-system',
  templateUrl: './new-system.component.html',
  styleUrls: ['./new-system.component.css']
})
export class NewSystemComponent implements OnInit {
val='yes';
  constructor(private route:ActivatedRoute,private service:ApiService,private router:Router) { }
labname:string;
  ngOnInit(): void {
    this.form.patchValue({
      mouse:'yes',
      keyboard:'yes'
    })
  this.route.params.subscribe(x=>{
this.labname = x.name;
  })
  }
  form = new FormGroup({
ram : new FormControl(''),
processor : new FormControl(''),
company : new FormControl(''),
screen : new FormControl(''),
keyboard : new FormControl(''),
mouse : new FormControl(''),
systemnumber : new FormControl(''),
soft:new FormControl(''),
OS:new FormControl(''),

  });
  get OS(){
    return this.form.get('OS');
  }
  get ram(){
    return this.form.get('ram');
  }
  get systemnumber(){
    return this.form.get('systemnumber');
  }
  get processor(){
    return this.form.get('processor');
  }
  get company(){
    return this.form.get('company');
  }
  get screen(){
    return this.form.get('screen');
  }
  get keyboard(){
    return this.form.get('keyboard');
  }
  get mouse(){
    return this.form.get('mouse');
  }
  get soft(){
    return this.form.get('soft');
  }
  submit(systeminfo){
    alert('new system created success fully');
    let systinf={lab:this.labname ,systeminfo:JSON.stringify(systeminfo)}
    console.log(systinf)
    this.service.postsystem(systinf).subscribe(res =>{
      console.log(res);
    });
   
  }
  option(){
    this.router.navigate(['/option',this.labname])
  }
  view(){
    this.router.navigate(['/view',this.labname]);
  }
}
