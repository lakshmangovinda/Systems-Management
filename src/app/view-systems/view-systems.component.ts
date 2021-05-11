import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-view-systems',
  templateUrl: './view-systems.component.html',
  styleUrls: ['./view-systems.component.css']
})
export class ViewSystemsComponent implements OnInit {

  constructor(private serv: ApiService, private route: ActivatedRoute,private router:Router ){ }
labname:any;
systemdata=[];
system;
systemid=[];
newarray = [];

  ngOnInit(): void {
    this.route.params.subscribe(x => this.labname = x.name);
  if(this.labname==""){
}
  else{
    this.serv.getsystem(this.labname).subscribe(data =>{
     this.system = data;
     console.log(this.system);
this.systemdata = this.system.map(x=>{
  return {id:x.id,systeminfo:JSON.parse(x.systeminfo)}
})
console.log(this.systemdata)
});
  
  }
  
  }
  back(){
  this.router.navigate(['/option',this.labname]);
  }
  edit(id){
   this.router.navigate(['/edit',this.labname,id]);
}


}
