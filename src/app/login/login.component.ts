import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../apiservice/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  result: any;
  role: any;

  constructor(private service: ApiService,private router: Router,private route: ActivatedRoute ){ }
  logintoken : any;
  invalidlogin = false;
  ngOnInit(): void {
  }


  get mail() {
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }
 
  form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
   
    
    
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
    
  });
  fileupload: any;
  imageurl: any;
 
  
  submit(value) {
 
    this.service.login(value)
      .subscribe( res =>{
        this.result = res;
        
        if(this.result && this.result.token){
          localStorage.setItem('token', this.result.token);
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');                               
          this.router.navigate([returnUrl || '/home']);
          
          return true;
        }else{
          alert('invalid password and email');
          return false;
        }
       
          
         
  


    },(error: Response)=>{
      if (error.status == 404 || 500){
        alert('invalid data');
      }else{
        alert('unexpected error occured'); 
      }
    });


  }
}
