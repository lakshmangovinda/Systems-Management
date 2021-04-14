import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";


import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpservice: HttpClient) { }
 users: any;
  jwt: any;
  getusers(){
    this.httpservice.get('http://localhost:3888/user');
  }
  registerusers(data){
    return this.httpservice.post('http://localhost:3888/userlogin',data);
   
  }
  login(logincredintails){
    return this.httpservice.post('http://localhost:3888/login',logincredintails)
    .pipe(map(val => val ));
                    
    
  }
  loggedin(){
    return !!localStorage.getItem('token');
  }
  logout(){
    return localStorage.removeItem('token');
  }
  get user(){
    let token = localStorage.getItem('token');
    if(!token) return null;
     
    
     this.jwt = jwt_decode(token);
     console.log(this.jwt.result[0].role);
return this.jwt.result[0].role;

 

  }

}
