import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-edit-system',
  templateUrl: './edit-system.component.html',
  styleUrls: ['./edit-system.component.css']
})
export class EditSystemComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private service:ApiService) { }
name:string;
id:number;
editabledata:[];
data;
  ngOnInit(): void {
  this.route.params.subscribe(x=>{
    this.name = x.name;
    this.id = x.id;
  });
if(this.id==0){

}
else{
  this.service.getsystembyid(this.id).subscribe(res =>{
    this.data= res;
    this.editabledata = this.data.map(x=>{
      return {
        id:x.id,
        systeminfo:JSON.parse(x.systeminfo)
      }
  
    })

 this.edit(this.editabledata)
   })
}

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
      submit(value){

let data={
  labname:this.name,
  systeminfo:JSON.stringify(value),
  }
this.service.editsystem(this.id,data).subscribe(res=>{
  console.log(res);
});
alert('updated successfully')
      }
  option(){
    this.router.navigate(['/option',this.name]);
  }
  view(){
    this.router.navigate(['/view',this.name]);
  }
  edit(data){
    console.log(data[0].systeminfo);

this.form.patchValue({
  OS :data[0].systeminfo.OS,
  ram:data[0].systeminfo.ram,
  mouse:data[0].systeminfo.mouse,
  keyboard:data[0].systeminfo.keyboard,
  processor:data[0].systeminfo.processor,
  soft:data[0].systeminfo.soft,
  company:data[0].systeminfo.company,
  systemnumber:data[0].systeminfo.systemnumber,
  screen:data[0].systeminfo.screen,

})
  }

}
