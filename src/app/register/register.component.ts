import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../apiservice/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,private service: ApiService) { }

  ngOnInit(): void {
  }
  get fullName() {
    return this.form.get('fullName');
  }
  get phoneNumber() {
    return this.form.get('phoneNumber');
  }
  get mail() {
    return this.form.get('email');
  }
 
  get password(){
    return this.form.get('password');
  }
 
  form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('[a-zA-Z][a-zA-Z ]+'),
      /* UsernameValidators.nospace, */
    ]),
    email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    
    password: new FormControl('', [Validators.required,Validators.minLength(6)])
    
  });
  fileupload: any;
  imageurl: any;
  
  submit(value) {
    
    this.service.registerusers(value).subscribe(x=>{
      alert(x);
    });
    
this.router.navigate(['/successregister'])
  }


}
